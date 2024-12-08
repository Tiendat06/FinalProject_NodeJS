const productRepository = require('../repository/ProductRepository');
const wishListRepository = require('../repository/WishListRepository');
const OrderRepository = require('../repository/OrderRepository');
const commentRepository = require('../repository/CommentRepository');
const userRepository = require('../repository/UserRepository');
const productVariantRepository = require('../repository/ProductVariantRepository');
const paymentRepository = require('../repository/PaymentRepository');
class SiteService {
    index = async (req, res) => {
        const top5Products = await productRepository.getTopNProducts(5);
        const top8Products = await productRepository.getTopNProducts(8);
        const top3Products = await productRepository.getTopNProducts(3);

        return res.status(200).json({
            status: true,
            top5Products,
            top8Products,
            top3Products
        })
    }
    // Get top wishlisted products
    getTopWishListedProducts = async (req, res) => {
        try {
            const topProducts = await wishListRepository.getTopWishListedProducts(3);
            return res.status(200).json({
                status: true,
                data: topProducts,
                msg: 'Top wishlisted products fetched successfully!',
            });
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            });
        }
    }

    // Get top-selling products
    getTopSellingProducts = async (req, res) => {
        try {
            const topProducts = await OrderRepository.getTopSellingProducts(8);
            return res.status(200).json({
                status: true,
                data: topProducts,
                msg: 'Top selling products fetched successfully!',
            });
        } catch (e) {
            return res.status(400).json({
                status: false,
                msg: e.message
            });
        }
    }

    // Get top-reviewed products
    getTopReviewedProducts = async (req, res) => {
        try {
            const topProducts = await commentRepository.getTopReviewedProducts(8);
            return res.status(200).json({
                status: true,
                data: topProducts,
                msg: 'Top reviewed products fetched successfully!',
            });
        } catch (e) {
            console.log('Service Error:', e);
            return res.status(400).json({
                status: false,
                msg: e.message
            });
        }
    }

    getDashboardData = async (req, res) => {
        try {
            let startDateMonth = '', endDateMonth = '';
            let startDateWeek = '', endDateWeek = '';
            const currentDate = Date.now();

            //12 months data
            endDateMonth = currentDate;
            startDateMonth = endDateMonth - (12 * 30 * 24 * 60 * 60 * 1000); // 12 months
            console.log('Start Date:', startDateMonth);
            console.log('End Date:', endDateMonth);

            //7 days data
            // 7 days calculation
            endDateWeek = currentDate;
            startDateWeek = endDateWeek - (7 * 24 * 60 * 60 * 1000); // 7 days ago
            console.log('Start Date for Week:', startDateWeek);
            console.log('End Date for Week:', endDateWeek);

            const ordersByMonth = await OrderRepository.getOrdersByMonth(startDateMonth, endDateMonth);
            const ordersByWeek = await OrderRepository.getOrdersByWeek(startDateWeek, endDateWeek);

            const totalUser = await userRepository.getTotalUser();
            const totalOrder = await OrderRepository.getTotalOrder();
            const totalProductVariant = await productVariantRepository.getTotalProductVariant();

            const totalRevenue = await this.getTotalRevenue();
            const totalProfit = await this.getTotalProfit();


            console.log('Orders by Month:', ordersByMonth); // Debug log
            console.log('Orders by Week:', ordersByWeek); // Debug log
            console.log('Total Users:', totalUser); // Debug log
            console.log('Total Orders:', totalOrder); // Debug log
            console.log('Total Product Variants:', totalProductVariant); // Debug log
            console.log('Total Revenue:', totalRevenue); // Debug log
            console.log('Total Profit:', totalProfit); // Debug log

            if (ordersByMonth.length === 0) {
                console.log('No orders found in the specified range.');
            }

            if (ordersByWeek.length === 0) {
                console.log('No orders found in the specified range for weeks.');
            }

            return res.status(200).json({
                status: true,
                orderByMonths: ordersByMonth,
                orderByWeeks: ordersByWeek,
                totalUser: totalUser,
                totalOrder: totalOrder,
                totalProductVariant: totalProductVariant,
                totalRevenue: totalRevenue,
                totalProfit: totalProfit,
                totalMoney: (totalProfit - totalRevenue),
                msg: 'Fetched orders by month successfully!',
            });
        } catch (error) {
            console.error('Error fetching orders by month:', error);
            return res.status(500).json({
                status: false,
                msg: 'Failed to fetch orders by month',
            });
        }
    };

    getTotalRevenue = async () => {
        try {
            const productVariant = await productVariantRepository.getAllProductVariants();
            let totalRevenue = 0;

            productVariant.forEach(variant => {
                const revenue = (variant.retail_price - 20) * variant.variant_quantity;
                totalRevenue += revenue; // Add to total revenue
            });
            return totalRevenue;
        } catch (error) {
            console.error('Error fetching total revenue:', error);
            return 0;
        }
    };

    getTotalProfit = async () => {
        try {
            const payments = await paymentRepository.getAllPayments();
            if (payments.length === 0) {
                return 0;
            }
            let totalProfit = 0;

            payments.forEach(payment => {
                totalProfit += payment.total_money;
            });
            return totalProfit;
        } catch (error) {
            console.error('Error fetching total profit:', error);
            return 0;
        }

    }

}

module.exports = new SiteService;