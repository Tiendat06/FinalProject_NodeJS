db = db.getSiblingDB('nodejs_final');

// account
db.createCollection('account');
db.account.insertMany(
    [
        {
            "_id": ObjectId("674067eac35c263bdad6c76d"),
            "user_id": ObjectId("674067eac35c263bdad6c769"),
            "role_id": ObjectId("6737252735224c690dbd21c3"),
            "password": "$2b$10$6rgf9Aj0ESGQnsNjDVqJeOrz..cVNiCfC0.hAmSuIDH6jXdqQ2mfO",
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-11-22T11:15:54.607Z"),
            "updatedAt": new Date("2024-11-22T11:15:54.607Z"),
        },
        {
            "_id": ObjectId("6741a5294ccb29381f082375"),
            "user_id": ObjectId("6741a5294ccb29381f082373"),
            "role_id": ObjectId("673724fc35224c690dbd21c2"),
            "password": "$2b$10$b941a36fFFmO0RzESvJySuZywDMjbhQKWnxLDQ5OdJIjN6L9ZO3LS",
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-11-23T09:49:29.473Z"),
            "updatedAt": new Date("2024-11-23T09:49:29.473Z"),
        },
        {
            "_id": ObjectId("6741a61d4ccb29381f082386"),
            "user_id": ObjectId("6741a61d4ccb29381f082384"),
            "role_id": ObjectId("6737252735224c690dbd21c3"),
            "password": "$2b$10$KmUWB3.uWG6fBXRMfsLtzuzR92S0GaJksafShtbKYR9ybhhspDyUW",
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-11-23T09:53:33.870Z"),
            "updatedAt": new Date("2024-11-23T09:53:33.870Z"),
        },
        {
            "_id": ObjectId("674c64f8e5063c9398680585"),
            "user_id": ObjectId("674c64f8e5063c9398680583"),
            "role_id": ObjectId("6737252735224c690dbd21c3"),
            "password": "$2b$10$oDcDiiB3Klv5sm7/ZE2MKOUR.3AkULe2Cat03MGnd9dL7QGsA5qG2",
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-12-01T13:30:32.420Z"),
            "updatedAt": new Date("2024-12-01T13:30:32.420Z"),
        },
        {
            "_id": ObjectId("675691557d962d327ba194ef"),
            "user_id": ObjectId("675691557d962d327ba194ed"),
            "role_id": ObjectId("6737252735224c690dbd21c3"),
            "password": "$2b$10$iNc.wV5hJU0/qhs8od.P0emtsa9K8grzoTzLECFm7C1rXRMHB1Zcq",
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-12-09T06:42:29.323Z"),
            "updatedAt": new Date("2024-12-09T06:42:29.323Z"),
        },
        {
            "_id": ObjectId("675692477d962d327ba194f8"),
            "user_id": ObjectId("675692477d962d327ba194f6"),
            "role_id": ObjectId("6737252735224c690dbd21c3"),
            "password": "$2b$10$Lm9ONVnJzJ4OOVqsDXLKd.wiFO8/o9XR2xywYQAl7Yvr1Ne3VZIUq",
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-12-09T06:46:31.855Z"),
            "updatedAt": new Date("2024-12-09T06:46:31.855Z"),
        },
        {
            "_id": ObjectId("675692847d962d327ba19501"),
            "user_id": ObjectId("675692847d962d327ba194ff"),
            "role_id": ObjectId("6737252735224c690dbd21c3"),
            "password": "$2b$10$pqa0fiYmlHsd2oaglKbByOIdJF5srXjtTjqYD6lsDoWUDpOsbqcWu",
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-12-09T06:47:32.772Z"),
            "updatedAt": new Date("2024-12-09T06:47:32.772Z"),
        },
        {
            "_id": ObjectId("6756c064204903ae7dc1d084"),
            "user_id": ObjectId("6756c064204903ae7dc1d082"),
            "role_id": ObjectId("6737252735224c690dbd21c3"),
            "password": "$2b$10$KT4/Dn2BCqIFjbJnMb35b.2Eh9WtsqXD1hnt55nz9bsEgvugiX4BG",
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-12-09T10:03:16.116Z"),
            "updatedAt": new Date("2024-12-09T10:03:16.116Z"),
        },
        {
            "_id": ObjectId("6756c364204903ae7dc1d110"),
            "user_id": ObjectId("6756c364204903ae7dc1d10e"),
            "role_id": ObjectId("6737252735224c690dbd21c3"),
            "password": "$2b$10$sg/jPa3g4FCNdiNWnrBZMe1bDjeq07fIm2OQkdVKA8CoHZAXk3J2O",
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-12-09T10:16:04.993Z"),
            "updatedAt": new Date("2024-12-09T10:16:04.993Z"),
        },
        {
            "_id": ObjectId("6756c394204903ae7dc1d119"),
            "user_id": ObjectId("6756c394204903ae7dc1d117"),
            "role_id": ObjectId("6737252735224c690dbd21c3"),
            "password": "$2b$10$jo9e6vhYDrmk7HndRXjMVe4aBmrPR5e7xB2FdmEP3W46KeoFIwwg.",
            "is_ban": false,
            "forgot_password_code": "",
            "deleted": false,
            "createdAt": new Date("2024-12-09T10:16:52.971Z"),
            "updatedAt": new Date("2024-12-09T10:16:52.971Z"),
        }
    ]
);

// address
db.createCollection('address');
db.address.insertMany(
    [
        {
            _id: ObjectId("673734f63d72cc4d7206d34e"),
            user_id: ObjectId("673734f63d72cc4d7206d34a"),
            fullName: "Tạ Tiến Đạt",
            address: "52/8, đường HT31",
            phone_number: "0356779197",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("673f7710be3ed6e609ab3a7f"),
            user_id: ObjectId("673f7710be3ed6e609ab3a7b"),
            fullName: "Jake Jason",
            address: "52/8, đường HT31",
            phone_number: "0356779197",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("6741a61d4ccb29381f082388"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            fullName: "Bob Johnson",
            address: "12 district",
            phone_number: "0369852147",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("674332ee0c792c9da04fcbd5"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            fullName: "Bob Johnson",
            address: "12 district",
            phone_number: "0369852147",
            is_default: false,
            __v: 0
        },
        {
            _id: ObjectId("6743fe78770fb2a999766be6"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            fullName: "Jake John",
            address: "52/8, đường HT31",
            phone_number: "0356779197",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("6743fe8f770fb2a999766bed"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            fullName: "Tạ Tiến Đạt",
            address: "Admin Address",
            phone_number: "0356779197",
            is_default: false,
            __v: 0
        },
        {
            _id: ObjectId("674ab2c28191eaaa221fbc60"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            fullName: "Ben 10",
            address: "52/8, HT45",
            phone_number: "0147852369",
            is_default: false,
            __v: 0
        },
        {
            _id: ObjectId("674c64f8e5063c9398680587"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            fullName: "Jacky Style",
            address: "HT45 district 12",
            phone_number: "0356779198",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("674c6f1b135a45393ac38270"),
            user_id: ObjectId("674c6f1b135a45393ac3826c"),
            fullName: "Jack Johnson",
            address: "HT15 district 12",
            phone_number: "0356779199",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("675691557d962d327ba194f1"),
            user_id: ObjectId("675691557d962d327ba194ed"),
            fullName: "Tran Minh Quoc",
            address: "Ho Chi Minh City, district 7, Tan Phong",
            phone_number: "0258963147",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("675692477d962d327ba194fa"),
            user_id: ObjectId("675692477d962d327ba194f6"),
            fullName: "Quoc Minh Tran",
            address: "19, Tan Phong, district 7",
            phone_number: "0369852741",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("675692847d962d327ba19503"),
            user_id: ObjectId("675692847d962d327ba194ff"),
            fullName: "Tang Thieu Phong",
            address: "19, Hoang Hoa Tham, district 5",
            phone_number: "0147896523",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("67569904f29ff44f35f902da"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            fullName: "Thao Nhi",
            address: "19, Tan Thoi Hiep, 12 district",
            phone_number: "0365896417",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("6756b13f0dad16005ce8b46f"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            fullName: "Tạ Tiến Đạt",
            address: "12 district",
            phone_number: "0356779198",
            is_default: false,
            __v: 0
        },
        {
            _id: ObjectId("6756c064204903ae7dc1d086"),
            user_id: ObjectId("6756c064204903ae7dc1d082"),
            fullName: "Maria Nguyen",
            address: "20, district Binh Thanh",
            phone_number: "0258796413",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("6756c364204903ae7dc1d112"),
            user_id: ObjectId("6756c364204903ae7dc1d10e"),
            fullName: "Speed Nguyen",
            address: "50, GreenLand, New York City",
            phone_number: "0258314697",
            is_default: true,
            __v: 0
        },
        {
            _id: ObjectId("6756c394204903ae7dc1d11b"),
            user_id: ObjectId("6756c394204903ae7dc1d117"),
            fullName: "Marry Dan",
            address: "20, Wonderland, London",
            phone_number: "0369741582",
            is_default: true,
            __v: 0
        }
    ]
)

// cart
db.createCollection('cart');
// db.cart.insertMany([])

// coupon
db.createCollection('coupon');
db.coupon.insertMany(
    [
        {
            _id: ObjectId("6741b389febecf90784bc23e"),
            coupon_name: "Discount 10%",
            description: "Get a 10% discount on your next purchase.",
            code: "DISCOUNT10",
            point: 120,
            createdAt: new Date("2024-01-01T10:00:00.000Z"),
            updatedAt: new Date("2024-12-02T11:52:24.632Z"),
            expiredAt: new Date("2024-12-31T23:59:59.000Z"),
            discount: 10
        },
        {
            _id: ObjectId("6741b389febecf90784bc23f"),
            coupon_name: "Free Shipping",
            description: "Enjoy free shipping on orders over $50.",
            code: "FREESHIP50",
            point: 50,
            createdAt: new Date("2024-02-01T12:00:00Z"),
            updatedAt: new Date("2024-02-01T12:00:00Z"),
            expiredAt: new Date("2024-08-31T23:59:59Z"),
            discount: 5
        },
        {
            _id: ObjectId("6741b389febecf90784bc240"),
            coupon_name: "Holiday Special",
            description: "Save $20 on purchases over $100 during the holiday season.",
            code: "HOLIDAY20",
            point: 200,
            createdAt: new Date("2024-11-01T15:00:00Z"),
            updatedAt: new Date("2024-11-01T15:00:00Z"),
            expiredAt: new Date("2024-12-25T23:59:59Z"),
            discount: 20
        },
        {
            _id: ObjectId("6741b389febecf90784bc241"),
            coupon_name: "Discount 30%",
            description: "Get a 30% discount on your next purchase.",
            code: "DISCOUNT30",
            point: 300,
            createdAt: new Date("2024-01-01T10:00:00Z"),
            updatedAt: new Date("2024-01-01T10:00:00Z"),
            expiredAt: new Date("2025-12-31T23:59:59Z"),
            discount: 30
        }
    ]
)

// comment
db.createCollection('comment');
db.comment.insertMany(
    [
        {
            _id: ObjectId("6745a54598c37682a859650a"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok",
            deleted: false,
            createdAt: new Date("2024-11-26T10:39:01.149Z"),
            updatedAt: new Date("2024-11-26T10:39:01.149Z"),
        },
        {
            _id: ObjectId("6745a876a24c46141ed3bb0d"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "It's time for watch",
            deleted: false,
            createdAt: new Date("2024-11-26T10:52:38.282Z"),
            updatedAt: new Date("2024-11-26T10:52:38.282Z"),
        },
        {
            _id: ObjectId("6745a8e1e76633d70457c8f3"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "nahhh",
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:25.661Z"),
            updatedAt: new Date("2024-11-26T10:54:25.661Z"),
        },
        {
            _id: ObjectId("6745a8ede76633d70457c8f5"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "nahhh",
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:37.791Z"),
            updatedAt: new Date("2024-11-26T10:54:37.791Z"),
        },
        {
            _id: ObjectId("6745a8f0e76633d70457c8f7"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "nahhh",
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:40.680Z"),
            updatedAt: new Date("2024-11-26T10:54:40.680Z"),
        },
        {
            _id: ObjectId("6745aa6de76633d70457c911"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "yess sir",
            deleted: false,
            createdAt: new Date("2024-11-26T11:01:01.836Z"),
            updatedAt: new Date("2024-11-26T11:01:01.836Z"),
        },
        {
            _id: ObjectId("674686fd4975aec49b3cc9da"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            content: "oke, gud job bro",
            deleted: false,
            createdAt: new Date("2024-11-27T02:42:05.395Z"),
            updatedAt: new Date("2024-11-27T02:42:05.395Z"),
        },
        {
            _id: ObjectId("67468ab54975aec49b3cca42"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "yehh",
            deleted: false,
            createdAt: new Date("2024-11-27T02:57:57.989Z"),
            updatedAt: new Date("2024-11-27T02:57:57.989Z"),
        },
        {
            _id: ObjectId("674ef56b6dacc8b59e4f851b"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            content: "ok sir",
            deleted: false,
            createdAt: new Date("2024-12-03T12:11:23.510Z"),
            updatedAt: new Date("2024-12-03T12:11:23.510Z"),
        },
        {
            _id: ObjectId("674ef5776dacc8b59e4f851d"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            content: "gud product",
            deleted: false,
            createdAt: new Date("2024-12-03T12:11:35.768Z"),
            updatedAt: new Date("2024-12-03T12:11:35.768Z"),
        },
        {
            _id: ObjectId("674fdee442d9564f928845d1"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "oke sir",
            deleted: false,
            createdAt: new Date("2024-12-04T04:47:32.943Z"),
            updatedAt: new Date("2024-12-04T04:47:32.944Z"),
        },
        {
            _id: ObjectId("674fdf4499909f5f022e0e8f"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "gud product",
            deleted: false,
            createdAt: new Date("2024-12-04T04:49:08.349Z"),
            updatedAt: new Date("2024-12-04T04:49:08.349Z"),
        },
        {
            _id: ObjectId("674fdf7199909f5f022e0e9e"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok",
            deleted: false,
            createdAt: new Date("2024-12-04T04:49:53.474Z"),
            updatedAt: new Date("2024-12-04T04:49:53.474Z"),
        },
        {
            _id: ObjectId("674fdfa599909f5f022e0eab"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "check",
            deleted: false,
            createdAt: new Date("2024-12-04T04:50:45.799Z"),
            updatedAt: new Date("2024-12-04T04:50:45.799Z"),
        },
        {
            _id: ObjectId("675481b88c060f60080c67b4"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok sir",
            deleted: false,
            createdAt: new Date("2024-12-07T17:11:20.359Z"),
            updatedAt: new Date("2024-12-07T17:11:20.359Z"),
        },
        {
            _id: ObjectId("675481d88c060f60080c67c3"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok",
            deleted: false,
            createdAt: new Date("2024-12-07T17:11:52.865Z"),
            updatedAt: new Date("2024-12-07T17:11:52.865Z"),
        },
        {
            _id: ObjectId("675482d394940a4b7fd0ec93"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "gud product",
            deleted: false,
            createdAt: new Date("2024-12-07T17:16:03.753Z"),
            updatedAt: new Date("2024-12-07T17:16:03.753Z"),
        },
        {
            _id: ObjectId("6754832394940a4b7fd0eca8"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok perfect",
            deleted: false,
            createdAt: new Date("2024-12-07T17:17:23.589Z"),
            updatedAt: new Date("2024-12-07T17:17:23.589Z"),
        },
        {
            _id: ObjectId("6754838c0e58b2db0ac6feb4"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "gudddd",
            deleted: false,
            createdAt: new Date("2024-12-07T17:19:08.095Z"),
            updatedAt: new Date("2024-12-07T17:19:08.095Z"),
        },
        {
            _id: ObjectId("675483c763f6d3f15fd94aed"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "that's great !",
            deleted: false,
            createdAt: new Date("2024-12-07T17:20:07.465Z"),
            updatedAt: new Date("2024-12-07T17:20:07.466Z"),
        },
        {
            _id: ObjectId("675483cd63f6d3f15fd94af9"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "that's great !",
            deleted: false,
            createdAt: new Date("2024-12-07T17:20:13.749Z"),
            updatedAt: new Date("2024-12-07T17:20:13.749Z"),
        },
        {
            _id: ObjectId("67548453dd77929dbe88f4b5"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok sirrrr",
            deleted: false,
            createdAt: new Date("2024-12-07T17:22:27.035Z"),
            updatedAt: new Date("2024-12-07T17:22:27.036Z"),
        },
        {
            _id: ObjectId("675484b018defbbb85016e5f"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "oke sirrrrrr",
            deleted: false,
            createdAt: new Date("2024-12-07T17:24:00.412Z"),
            updatedAt: new Date("2024-12-07T17:24:00.412Z"),
        },
        {
            _id: ObjectId("675488cd0d29ad8cbf52b19c"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "ok",
            deleted: false,
            createdAt: new Date("2024-12-07T17:41:33.558Z"),
            updatedAt: new Date("2024-12-07T17:41:33.558Z"),
        },
        {
            _id: ObjectId("675488d20d29ad8cbf52b1a1"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "oke",
            deleted: false,
            createdAt: new Date("2024-12-07T17:41:38.470Z"),
            updatedAt: new Date("2024-12-07T17:41:38.470Z"),
        },
        {
            _id: ObjectId("675488e40d29ad8cbf52b1bd"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "yehh",
            deleted: false,
            createdAt: new Date("2024-12-07T17:41:56.372Z"),
            updatedAt: new Date("2024-12-07T17:41:56.372Z"),
        },
        {
            _id: ObjectId("675489c805fc1b88d5f2cecd"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            content: "oke",
            deleted: false,
            createdAt: new Date("2024-12-07T17:45:44.792Z"),
            updatedAt: new Date("2024-12-07T17:45:44.792Z"),
        },
        {
            _id: ObjectId("67548a5405fc1b88d5f2cf0f"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a6"),
            content: "oke",
            deleted: false,
            createdAt: new Date("2024-12-07T17:48:04.691Z"),
            updatedAt: new Date("2024-12-07T17:48:04.691Z"),
        },
        {
            _id: ObjectId("67569721f552000b2bae3e77"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            content: "it's oke bro",
            deleted: false,
            createdAt: new Date("2024-12-09T07:07:13.262Z"),
            updatedAt: new Date("2024-12-09T07:07:13.262Z"),
        },
        {
            _id: ObjectId("67569fcdb4a7648736a80dfd"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151ac"),
            content: "noice yo !!",
            deleted: false,
            createdAt: new Date("2024-12-09T07:44:13.527Z"),
            updatedAt: new Date("2024-12-09T07:44:13.527Z"),
        },
        {
            _id: ObjectId("6756a005b4a7648736a80e27"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151c3"),
            content: "Oh dear, fantastic !",
            deleted: false,
            createdAt: new Date("2024-12-09T07:45:09.615Z"),
            updatedAt: new Date("2024-12-09T07:45:09.615Z"),
        },
        {
            _id: ObjectId("6756a0ffb4a7648736a80e7c"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            product_id: ObjectId("674138636c0973f433b151cf"),
            content: "oh my god, that's so awesome, yo !",
            deleted: false,
            createdAt: new Date("2024-12-09T07:49:19.124Z"),
            updatedAt: new Date("2024-12-09T07:49:19.124Z"),
        },
        {
            _id: ObjectId("6756a1b6b4a7648736a80e91"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            product_id: ObjectId("674138636c0973f433b151cf"),
            content: "noice yo !!!!",
            deleted: false,
            createdAt: new Date("2024-12-09T07:52:22.951Z"),
            updatedAt: new Date("2024-12-09T07:52:22.951Z"),
        },
        {
            _id: ObjectId("6756a3af5b0ba3712239a530"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            product_id: ObjectId("674138636c0973f433b151c7"),
            content: "ohhh, goddd, it's soo fantastic",
            deleted: false,
            createdAt: new Date("2024-12-09T08:00:47.582Z"),
            updatedAt: new Date("2024-12-09T08:00:47.582Z"),
        },
        {
            _id: ObjectId("6756a4df5b0ba3712239a54a"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            product_id: ObjectId("674138636c0973f433b151ab"),
            content: "good products",
            deleted: false,
            createdAt: new Date("2024-12-09T08:05:51.165Z"),
            updatedAt: new Date("2024-12-09T08:05:51.166Z"),
        },
        {
            _id: ObjectId("6756a7310dad16005ce8b28b"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            product_id: ObjectId("674138636c0973f433b151c5"),
            content: "oh dearrrr",
            deleted: false,
            createdAt: new Date("2024-12-09T08:15:45.915Z"),
            updatedAt: new Date("2024-12-09T08:15:45.915Z"),
        },
        {
            _id: ObjectId("6756aab10dad16005ce8b32d"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            product_id: ObjectId("674138636c0973f433b151c9"),
            content: "WOWWW, COOL",
            deleted: false,
            createdAt: new Date("2024-12-09T08:30:41.580Z"),
            updatedAt: new Date("2024-12-09T08:30:41.580Z"),
        },
        {
            _id: ObjectId("6756abe50dad16005ce8b370"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            product_id: ObjectId("674138636c0973f433b151c6"),
            content: "yahhh",
            deleted: false,
            createdAt: new Date("2024-12-09T08:35:49.055Z"),
            updatedAt: new Date("2024-12-09T08:35:49.055Z"),
            __v: 0
        },
        {
            _id: ObjectId("6756ac400dad16005ce8b3bc"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            product_id: ObjectId("674138636c0973f433b151b5"),
            content: "ohhh sirrr, that's good",
            deleted: false,
            createdAt: new Date("2024-12-09T08:37:20.038Z"),
            updatedAt: new Date("2024-12-09T08:37:20.038Z"),
            __v: 0
        },
        {
            _id: ObjectId("6756ad0a0dad16005ce8b3fd"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            product_id: ObjectId("674138636c0973f433b151c4"),
            content: "yesss, i need that laptop",
            deleted: false,
            createdAt: new Date("2024-12-09T08:40:42.465Z"),
            updatedAt: new Date("2024-12-09T08:40:42.465Z"),
            __v: 0
        },
        {
            _id: ObjectId("6756ad380dad16005ce8b41e"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            content: "oke",
            deleted: false,
            createdAt: new Date("2024-12-09T08:41:28.090Z"),
            updatedAt: new Date("2024-12-09T08:41:28.090Z"),
            __v: 0
        },
        {
            _id: ObjectId("6756b4e90dad16005ce8b5e3"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151ce"),
            content: "coollll",
            deleted: false,
            createdAt: new Date("2024-12-09T09:14:17.331Z"),
            updatedAt: new Date("2024-12-09T09:14:17.331Z"),
            __v: 0
        },
        {
            _id: ObjectId("6756b56b0dad16005ce8b631"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151bf"),
            content: "yesssss sir",
            deleted: false,
            createdAt: new Date("2024-12-09T09:16:27.130Z"),
            updatedAt: new Date("2024-12-09T09:16:27.130Z"),
            __v: 0
        },
        {
            _id: ObjectId("6756bef9204903ae7dc1cfbc"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151bd"),
            content: "cool yo !!",
            deleted: false,
            createdAt: new Date("2024-12-09T09:57:13.711Z"),
            updatedAt: new Date("2024-12-09T09:57:13.711Z"),
            __v: 0
        },
        {
            _id: ObjectId("6756bf87204903ae7dc1cffc"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151b5"),
            content: "great yo !",
            deleted: false,
            createdAt: new Date("2024-12-09T09:59:35.190Z"),
            updatedAt: new Date("2024-12-09T09:59:35.190Z"),
            __v: 0
        },
        {
            _id: ObjectId("6756bfee204903ae7dc1d043"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            product_id: ObjectId("674138636c0973f433b151b6"),
            content: "great bro",
            deleted: false,
            createdAt: new Date("2024-12-09T10:01:18.940Z"),
            updatedAt: new Date("2024-12-09T10:01:18.940Z"),
            __v: 0
        }
    ]
)

// order
db.createCollection('order');
db.order.insertMany(
    [
        {
            _id: ObjectId("674b29753521e6fef9223b1c"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Shipping",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-30T15:05:24.120Z"),
            updatedAt: new Date("2024-11-30T15:05:24.120Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c0c5aad080d212b4b1a95"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Shipping",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-29T07:19:59.733Z"),
            updatedAt: new Date("2024-11-29T07:19:59.733Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c0e46ad080d212b4b1acf"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-12-01T07:28:01.752Z"),
            updatedAt: new Date("2024-12-01T07:28:01.752Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c1fe8a50614d7a28b4583"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Shipping",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-11T08:36:02.707Z"),
            updatedAt: new Date("2024-11-11T08:36:02.707Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c2082a50614d7a28b45c1"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-10-29T08:39:04.034Z"),
            updatedAt: new Date("2024-10-10T08:39:04.034Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c54411b90b0d7e35c72c6"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-01T12:19:24.527Z"),
            updatedAt: new Date("2024-11-01T12:19:24.527Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c635ce5063c9398680536"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("674c635ce5063c9398680534"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-10-21T13:23:40.717Z"),
            updatedAt: new Date("2024-10-21T13:23:40.717Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c63ede5063c939868054e"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("674c63ede5063c939868054c"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-10-01T13:26:05.109Z"),
            updatedAt: new Date("2024-10-01T13:26:05.109Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c64f8e5063c9398680589"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            coupon_id: null,
            address_id: ObjectId("674c64f8e5063c9398680587"),
            status: "Shipping",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-15T13:30:32.429Z"),
            updatedAt: new Date("2024-11-15T13:30:32.429Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674c6f1b135a45393ac38272"),
            user_id: ObjectId("674c6f1b135a45393ac3826c"),
            coupon_id: null,
            address_id: ObjectId("674c6f1b135a45393ac38270"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-01T14:13:47.738Z"),
            updatedAt: new Date("2024-12-01T14:13:47.738Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-03T12:41:14.514Z"),
            updatedAt: new Date("2024-12-03T12:41:14.514Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756975bf552000b2bae3e86"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            coupon_id: null,
            address_id: ObjectId("67569904f29ff44f35f902da"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-12-07T07:21:00.502Z"),
            updatedAt: new Date("2024-12-07T07:21:00.502Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a03db4a7648736a80e37"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            coupon_id: null,
            address_id: ObjectId("67569904f29ff44f35f902da"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-09T07:47:27.648Z"),
            updatedAt: new Date("2024-12-09T07:47:27.648Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a1dab4a7648736a80e9e"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            coupon_id: null,
            address_id: ObjectId("6741a61d4ccb29381f082388"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-19T07:53:27.976Z"),
            updatedAt: new Date("2024-11-19T07:53:27.976Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a4eb5b0ba3712239a556"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            coupon_id: null,
            address_id: ObjectId("6741a61d4ccb29381f082388"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-02T08:06:14.012Z"),
            updatedAt: new Date("2024-12-02T08:06:14.012Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a7450dad16005ce8b29a"),
            user_id: ObjectId("6741a61d4ccb29381f082384"),
            coupon_id: null,
            address_id: ObjectId("6741a61d4ccb29381f082388"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-09T08:16:22.442Z"),
            updatedAt: new Date("2024-12-09T08:16:22.442Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756aac30dad16005ce8b33c"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            coupon_id: null,
            address_id: ObjectId("674c64f8e5063c9398680587"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-11-25T08:35:29.501Z"),
            updatedAt: new Date("2024-11-25T08:35:29.501Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756abf30dad16005ce8b380"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            coupon_id: null,
            address_id: ObjectId("674c64f8e5063c9398680587"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-12-09T08:36:18.517Z"),
            updatedAt: new Date("2024-12-09T08:36:18.517Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ac520dad16005ce8b3cb"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            coupon_id: null,
            address_id: ObjectId("674c64f8e5063c9398680587"),
            status: "Confirmed",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-12-05T08:37:47.674Z"),
            updatedAt: new Date("2024-12-05T08:37:47.674Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ad430dad16005ce8b42a"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            coupon_id: null,
            address_id: ObjectId("674c64f8e5063c9398680587"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-06T08:41:47.578Z"),
            updatedAt: new Date("2024-12-06T08:41:47.578Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b13f0dad16005ce8b471"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            coupon_id: null,
            address_id: ObjectId("6756b13f0dad16005ce8b46f"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-11-19T08:58:39.565Z"),
            updatedAt: new Date("2024-11-19T08:58:39.565Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3330dad16005ce8b506"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe8f770fb2a999766bed"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-05T09:07:13.853Z"),
            updatedAt: new Date("2024-12-05T09:07:13.853Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b36c0dad16005ce8b54f"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: ObjectId("6741b389febecf90784bc23e"),
            address_id: ObjectId("6743fe8f770fb2a999766bed"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-12-04T09:08:07.158Z"),
            updatedAt: new Date("2024-12-04T09:08:07.158Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b5000dad16005ce8b5f5"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: ObjectId("6741b389febecf90784bc241"),
            address_id: ObjectId("674ab2c28191eaaa221fbc60"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-23T09:15:00.273Z"),
            updatedAt: new Date("2024-11-23T09:15:00.273Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b5770dad16005ce8b63d"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: null,
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-10-12T09:16:47.697Z"),
            updatedAt: new Date("2024-10-12T09:16:47.697Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b9ed0dad16005ce8b679"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            coupon_id: ObjectId("6741b389febecf90784bc23e"),
            address_id: ObjectId("6743fe78770fb2a999766be6"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-12-06T09:35:55.856Z"),
            updatedAt: new Date("2024-12-06T09:35:55.856Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf00204903ae7dc1cfc8"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            coupon_id: null,
            address_id: ObjectId("67569904f29ff44f35f902da"),
            status: "Pending",
            tax: 10,
            shippingFee: 10,
            createdAt: new Date("2024-10-23T09:59:06.076Z"),
            updatedAt: new Date("2024-10-23T09:59:06.076Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf95204903ae7dc1d00b"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            coupon_id: null,
            address_id: ObjectId("67569904f29ff44f35f902da"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-10-16T09:59:55.071Z"),
            updatedAt: new Date("2024-10-16T09:59:55.071Z"),
            deleted: false,
            __v: 0
        },
        {
            _id: ObjectId("6756c001204903ae7dc1d04f"),
            user_id: ObjectId("674c64f8e5063c9398680583"),
            coupon_id: null,
            address_id: ObjectId("6756b13f0dad16005ce8b46f"),
            status: "Pending",
            tax: 10,
            shippingFee: 6,
            createdAt: new Date("2024-11-09T10:01:46.427Z"),
            updatedAt: new Date("2024-11-09T10:01:46.427Z"),
            deleted: false,
            __v: 0
        }
    ]
)

// order details
db.createCollection('order_details');
db.order_details.insertMany(
    [
        {
            "_id": ObjectId("674b29753521e6fef9223b1f"),
            "order_id": ObjectId("674b29753521e6fef9223b1c"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c0c5aad080d212b4b1a98"),
            "order_id": ObjectId("674c0c5aad080d212b4b1a95"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c0e46ad080d212b4b1ad3"),
            "order_id": ObjectId("674c0e46ad080d212b4b1acf"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c0e46ad080d212b4b1ad4"),
            "order_id": ObjectId("674c0e46ad080d212b4b1acf"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b6"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c1fe8a50614d7a28b4587"),
            "order_id": ObjectId("674c1fe8a50614d7a28b4583"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c1fe8a50614d7a28b4588"),
            "order_id": ObjectId("674c1fe8a50614d7a28b4583"),
            "product_variant_id": ObjectId("6745d433a409da88028f01bc"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c2082a50614d7a28b45c5"),
            "order_id": ObjectId("674c2082a50614d7a28b45c1"),
            "product_variant_id": ObjectId("6745d433a409da88028f01be"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c2082a50614d7a28b45c6"),
            "order_id": ObjectId("674c2082a50614d7a28b45c1"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b6"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c54411b90b0d7e35c72c9"),
            "order_id": ObjectId("674c54411b90b0d7e35c72c6"),
            "product_variant_id": ObjectId("6745d433a409da88028f01c3"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c635ce5063c9398680538"),
            "order_id": ObjectId("674c635ce5063c9398680536"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c635ce5063c9398680539"),
            "order_id": ObjectId("674c635ce5063c9398680536"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b8"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c63ede5063c9398680550"),
            "order_id": ObjectId("674c63ede5063c939868054e"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c63ede5063c9398680551"),
            "order_id": ObjectId("674c63ede5063c939868054e"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b8"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c64f8e5063c939868058b"),
            "order_id": ObjectId("674c64f8e5063c9398680589"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b4"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674c6f1b135a45393ac38274"),
            "order_id": ObjectId("674c6f1b135a45393ac38272"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("674efc3fe6ca0e50af3e4f49"),
            "order_id": ObjectId("674efc3fe6ca0e50af3e4f46"),
            "product_variant_id": ObjectId("6745d433a409da88028f01b2"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756975bf552000b2bae3e89"),
            "order_id": ObjectId("6756975bf552000b2bae3e86"),
            "product_variant_id": ObjectId("6745d433a409da88028f01bf"),
            "quantity": 2
        },
        {
            "_id": ObjectId("6756a03db4a7648736a80e3a"),
            "order_id": ObjectId("6756a03db4a7648736a80e37"),
            "product_variant_id": ObjectId("6745d433a409da88028f01fa"),
            "quantity": 2
        },
        {
            "_id": ObjectId("6756a1dab4a7648736a80ea1"),
            "order_id": ObjectId("6756a1dab4a7648736a80e9e"),
            "product_variant_id": ObjectId("6745d433a409da88028f0205"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756a4eb5b0ba3712239a559"),
            "order_id": ObjectId("6756a4eb5b0ba3712239a556"),
            "product_variant_id": ObjectId("6745d433a409da88028f01c5"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756a7450dad16005ce8b29d"),
            "order_id": ObjectId("6756a7450dad16005ce8b29a"),
            "product_variant_id": ObjectId("6745d433a409da88028f01fc"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756aac30dad16005ce8b33f"),
            "order_id": ObjectId("6756aac30dad16005ce8b33c"),
            "product_variant_id": ObjectId("6745d433a409da88028f01ff"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756abf30dad16005ce8b383"),
            "order_id": ObjectId("6756abf30dad16005ce8b380"),
            "product_variant_id": ObjectId("6745d433a409da88028f01fd"),
            "quantity": 2
        },
        {
            "_id": ObjectId("6756ac520dad16005ce8b3ce"),
            "order_id": ObjectId("6756ac520dad16005ce8b3cb"),
            "product_variant_id": ObjectId("6745d433a409da88028f01da"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756ad430dad16005ce8b42e"),
            "order_id": ObjectId("6756ad430dad16005ce8b42a"),
            "product_variant_id": ObjectId("6745d433a409da88028f01fb"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756ad430dad16005ce8b42f"),
            "order_id": ObjectId("6756ad430dad16005ce8b42a"),
            "product_variant_id": ObjectId("6745d433a409da88028f01c2"),
            "quantity": 3
        },
        {
            "_id": ObjectId("6756b13f0dad16005ce8b473"),
            "order_id": ObjectId("6756b13f0dad16005ce8b471"),
            "product_variant_id": ObjectId("6745d433a409da88028f01ec"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756b3330dad16005ce8b509"),
            "order_id": ObjectId("6756b3330dad16005ce8b506"),
            "product_variant_id": ObjectId("6745d433a409da88028f01fd"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756b36c0dad16005ce8b552"),
            "order_id": ObjectId("6756b36c0dad16005ce8b54f"),
            "product_variant_id": ObjectId("6745d433a409da88028f01c8"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756b5000dad16005ce8b5f8"),
            "order_id": ObjectId("6756b5000dad16005ce8b5f5"),
            "product_variant_id": ObjectId("6745d433a409da88028f0204"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756b5770dad16005ce8b640"),
            "order_id": ObjectId("6756b5770dad16005ce8b63d"),
            "product_variant_id": ObjectId("6745d433a409da88028f01ef"),
            "quantity": 3
        },
        {
            "_id": ObjectId("6756b9ed0dad16005ce8b67c"),
            "order_id": ObjectId("6756b9ed0dad16005ce8b679"),
            "product_variant_id": ObjectId("6745d433a409da88028f01c7"),
            "quantity": 2
        },
        {
            "_id": ObjectId("6756bf00204903ae7dc1cfcb"),
            "order_id": ObjectId("6756bf00204903ae7dc1cfc8"),
            "product_variant_id": ObjectId("6745d433a409da88028f01eb"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756bf95204903ae7dc1d00e"),
            "order_id": ObjectId("6756bf95204903ae7dc1d00b"),
            "product_variant_id": ObjectId("6745d433a409da88028f01db"),
            "quantity": 1
        },
        {
            "_id": ObjectId("6756c001204903ae7dc1d052"),
            "order_id": ObjectId("6756c001204903ae7dc1d04f"),
            "product_variant_id": ObjectId("6745d433a409da88028f01dd"),
            "quantity": 1
        }
    ]
)

// order status
db.createCollection('order_status');
db.order_status.insertMany(
    [
        {
            _id: ObjectId("6741b3abfebecf90784bc244"),
            status: "Pending"
        },
        {
            _id: ObjectId("6741b3abfebecf90784bc245"),
            status: "Confirmed"
        },
        {
            _id: ObjectId("6741b3abfebecf90784bc246"),
            status: "Shipping"
        },
        {
            _id: ObjectId("6741b3abfebecf90784bc247"),
            status: "Delivered"
        }
    ]
)

// order status details
db.createCollection('order_status_details');
db.order_status_details.insertMany(
    [
        {
            _id: ObjectId("674b29b43521e6fef9223b2b"),
            order_id: ObjectId("674b29753521e6fef9223b1c"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-11-30T15:05:24.168Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674b29b43521e6fef9223b2c"),
            order_id: ObjectId("674b29753521e6fef9223b1c"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:15:04.180Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674b29b43521e6fef9223b2d"),
            order_id: ObjectId("674b29753521e6fef9223b1c"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: new Date("2024-12-02T16:15:36.244Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674b29b43521e6fef9223b2e"),
            order_id: ObjectId("674b29753521e6fef9223b1c"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: new Date("2024-12-02T15:50:38.135Z"),
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c0e1fad080d212b4b1aa8"),
            order_id: ObjectId("674c0c5aad080d212b4b1a95"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T07:19:59.758Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c0e1fad080d212b4b1aa9"),
            order_id: ObjectId("674c0c5aad080d212b4b1a95"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:01:08.766Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c0e1fad080d212b4b1aaa"),
            order_id: ObjectId("674c0c5aad080d212b4b1a95"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: new Date("2024-12-02T16:01:12.146Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c0e1fad080d212b4b1aab"),
            order_id: ObjectId("674c0c5aad080d212b4b1a95"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c1001ad080d212b4b1ae4"),
            order_id: ObjectId("674c0e46ad080d212b4b1acf"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T07:28:01.758Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c1001ad080d212b4b1ae5"),
            order_id: ObjectId("674c0e46ad080d212b4b1acf"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:17:21.236Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c1001ad080d212b4b1ae6"),
            order_id: ObjectId("674c0e46ad080d212b4b1acf"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c1001ad080d212b4b1ae7"),
            order_id: ObjectId("674c0e46ad080d212b4b1acf"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c1ff2a50614d7a28b4594"),
            order_id: ObjectId("674c1fe8a50614d7a28b4583"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T08:36:02.716Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c1ff2a50614d7a28b4595"),
            order_id: ObjectId("674c1fe8a50614d7a28b4583"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:19:23.600Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c1ff2a50614d7a28b4596"),
            order_id: ObjectId("674c1fe8a50614d7a28b4583"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: new Date("2024-12-02T16:20:38.869Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c1ff2a50614d7a28b4597"),
            order_id: ObjectId("674c1fe8a50614d7a28b4583"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c20a8a50614d7a28b45d2"),
            order_id: ObjectId("674c2082a50614d7a28b45c1"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T08:39:04.038Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c20a8a50614d7a28b45d3"),
            order_id: ObjectId("674c2082a50614d7a28b45c1"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:14:10.452Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c20a8a50614d7a28b45d4"),
            order_id: ObjectId("674c2082a50614d7a28b45c1"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
    //
        {
            _id: ObjectId("674c20a8a50614d7a28b45d5"),
            order_id: ObjectId("674c2082a50614d7a28b45c1"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c544c1b90b0d7e35c72d5"),
            order_id: ObjectId("674c54411b90b0d7e35c72c6"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T12:19:24.555Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c544c1b90b0d7e35c72d6"),
            order_id: ObjectId("674c54411b90b0d7e35c72c6"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T16:01:23.301Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c544c1b90b0d7e35c72d7"),
            order_id: ObjectId("674c54411b90b0d7e35c72c6"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c544c1b90b0d7e35c72d8"),
            order_id: ObjectId("674c54411b90b0d7e35c72c6"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c635ce5063c9398680541"),
            order_id: ObjectId("674c635ce5063c9398680536"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T13:23:40.731Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c635ce5063c9398680542"),
            order_id: ObjectId("674c635ce5063c9398680536"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c635ce5063c9398680543"),
            order_id: ObjectId("674c635ce5063c9398680536"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c635ce5063c9398680544"),
            order_id: ObjectId("674c635ce5063c9398680536"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c63ede5063c9398680559"),
            order_id: ObjectId("674c63ede5063c939868054e"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T13:26:05.115Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c63ede5063c939868055a"),
            order_id: ObjectId("674c63ede5063c939868054e"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c63ede5063c939868055b"),
            order_id: ObjectId("674c63ede5063c939868054e"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c63ede5063c939868055c"),
            order_id: ObjectId("674c63ede5063c939868054e"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c64f8e5063c9398680593"),
            order_id: ObjectId("674c64f8e5063c9398680589"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T13:30:32.432Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c64f8e5063c9398680594"),
            order_id: ObjectId("674c64f8e5063c9398680589"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-02T15:51:41.158Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c64f8e5063c9398680595"),
            order_id: ObjectId("674c64f8e5063c9398680589"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: new Date("2024-12-03T13:37:21.211Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c64f8e5063c9398680596"),
            order_id: ObjectId("674c64f8e5063c9398680589"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674c6f1b135a45393ac3827c"),
            order_id: ObjectId("674c6f1b135a45393ac38272"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-01T14:13:47.748Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c6f1b135a45393ac3827d"),
            order_id: ObjectId("674c6f1b135a45393ac38272"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-03T13:33:44.601Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674c6f1b135a45393ac3827e"),
            order_id: ObjectId("674c6f1b135a45393ac38272"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
    //
        {
            _id: ObjectId("674c6f1b135a45393ac3827f"),
            order_id: ObjectId("674c6f1b135a45393ac38272"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674efc6ae6ca0e50af3e4f55"),
            order_id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-03T12:41:14.539Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674efc6ae6ca0e50af3e4f56"),
            order_id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-03T13:29:52.751Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("674efc6ae6ca0e50af3e4f57"),
            order_id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("674efc6ae6ca0e50af3e4f58"),
            order_id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("67569a5cadea324424515176"),
            order_id: ObjectId("6756975bf552000b2bae3e86"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T07:21:00.512Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("67569a5cadea324424515177"),
            order_id: ObjectId("6756975bf552000b2bae3e86"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("67569a5cadea324424515178"),
            order_id: ObjectId("6756975bf552000b2bae3e86"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("67569a5cadea324424515179"),
            order_id: ObjectId("6756975bf552000b2bae3e86"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a08fb4a7648736a80e47"),
            order_id: ObjectId("6756a03db4a7648736a80e37"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T07:47:27.674Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756a08fb4a7648736a80e48"),
            order_id: ObjectId("6756a03db4a7648736a80e37"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a08fb4a7648736a80e49"),
            order_id: ObjectId("6756a03db4a7648736a80e37"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a08fb4a7648736a80e4a"),
            order_id: ObjectId("6756a03db4a7648736a80e37"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a1f7b4a7648736a80eae"),
            order_id: ObjectId("6756a1dab4a7648736a80e9e"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T07:53:27.987Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756a1f7b4a7648736a80eaf"),
            order_id: ObjectId("6756a1dab4a7648736a80e9e"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a1f8b4a7648736a80eb0"),
            order_id: ObjectId("6756a1dab4a7648736a80e9e"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a1f8b4a7648736a80eb1"),
            order_id: ObjectId("6756a1dab4a7648736a80e9e"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a4f65b0ba3712239a566"),
            order_id: ObjectId("6756a4eb5b0ba3712239a556"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:06:14.017Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756a4f65b0ba3712239a567"),
            order_id: ObjectId("6756a4eb5b0ba3712239a556"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a4f65b0ba3712239a568"),
            order_id: ObjectId("6756a4eb5b0ba3712239a556"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a4f65b0ba3712239a569"),
            order_id: ObjectId("6756a4eb5b0ba3712239a556"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
    //
        {
            _id: ObjectId("6756a7560dad16005ce8b2aa"),
            order_id: ObjectId("6756a7450dad16005ce8b29a"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:16:22.449Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756a7560dad16005ce8b2ab"),
            order_id: ObjectId("6756a7450dad16005ce8b29a"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a7560dad16005ce8b2ac"),
            order_id: ObjectId("6756a7450dad16005ce8b29a"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756a7560dad16005ce8b2ad"),
            order_id: ObjectId("6756a7450dad16005ce8b29a"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756abd10dad16005ce8b34e"),
            order_id: ObjectId("6756aac30dad16005ce8b33c"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:35:29.504Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756abd10dad16005ce8b34f"),
            order_id: ObjectId("6756aac30dad16005ce8b33c"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756abd10dad16005ce8b350"),
            order_id: ObjectId("6756aac30dad16005ce8b33c"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756abd10dad16005ce8b351"),
            order_id: ObjectId("6756aac30dad16005ce8b33c"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ac020dad16005ce8b390"),
            order_id: ObjectId("6756abf30dad16005ce8b380"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:36:18.519Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756ac020dad16005ce8b391"),
            order_id: ObjectId("6756abf30dad16005ce8b380"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-09T09:48:08.910Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756ac020dad16005ce8b392"),
            order_id: ObjectId("6756abf30dad16005ce8b380"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ac020dad16005ce8b393"),
            order_id: ObjectId("6756abf30dad16005ce8b380"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ac5b0dad16005ce8b3db"),
            order_id: ObjectId("6756ac520dad16005ce8b3cb"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:37:47.677Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756ac5b0dad16005ce8b3dc"),
            order_id: ObjectId("6756ac520dad16005ce8b3cb"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: new Date("2024-12-09T09:51:22.959Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756ac5b0dad16005ce8b3dd"),
            order_id: ObjectId("6756ac520dad16005ce8b3cb"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ac5b0dad16005ce8b3de"),
            order_id: ObjectId("6756ac520dad16005ce8b3cb"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ad4b0dad16005ce8b43c"),
            order_id: ObjectId("6756ad430dad16005ce8b42a"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:41:47.582Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756ad4b0dad16005ce8b43d"),
            order_id: ObjectId("6756ad430dad16005ce8b42a"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ad4b0dad16005ce8b43e"),
            order_id: ObjectId("6756ad430dad16005ce8b42a"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756ad4b0dad16005ce8b43f"),
            order_id: ObjectId("6756ad430dad16005ce8b42a"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
    //
        {
            _id: ObjectId("6756b13f0dad16005ce8b47b"),
            order_id: ObjectId("6756b13f0dad16005ce8b471"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T08:58:39.568Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756b13f0dad16005ce8b47c"),
            order_id: ObjectId("6756b13f0dad16005ce8b471"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b13f0dad16005ce8b47d"),
            order_id: ObjectId("6756b13f0dad16005ce8b471"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b13f0dad16005ce8b47e"),
            order_id: ObjectId("6756b13f0dad16005ce8b471"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3410dad16005ce8b51d"),
            order_id: ObjectId("6756b3330dad16005ce8b506"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:07:13.857Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756b3410dad16005ce8b51e"),
            order_id: ObjectId("6756b3330dad16005ce8b506"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3410dad16005ce8b51f"),
            order_id: ObjectId("6756b3330dad16005ce8b506"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3410dad16005ce8b520"),
            order_id: ObjectId("6756b3330dad16005ce8b506"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3770dad16005ce8b563"),
            order_id: ObjectId("6756b36c0dad16005ce8b54f"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:08:07.160Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756b3770dad16005ce8b564"),
            order_id: ObjectId("6756b36c0dad16005ce8b54f"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3770dad16005ce8b565"),
            order_id: ObjectId("6756b36c0dad16005ce8b54f"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b3770dad16005ce8b566"),
            order_id: ObjectId("6756b36c0dad16005ce8b54f"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b5140dad16005ce8b609"),
            order_id: ObjectId("6756b5000dad16005ce8b5f5"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:15:00.275Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756b5140dad16005ce8b60a"),
            order_id: ObjectId("6756b5000dad16005ce8b5f5"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b5140dad16005ce8b60b"),
            order_id: ObjectId("6756b5000dad16005ce8b5f5"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b5140dad16005ce8b60c"),
            order_id: ObjectId("6756b5000dad16005ce8b5f5"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b57f0dad16005ce8b64d"),
            order_id: ObjectId("6756b5770dad16005ce8b63d"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:16:47.701Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756b57f0dad16005ce8b64e"),
            order_id: ObjectId("6756b5770dad16005ce8b63d"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b57f0dad16005ce8b64f"),
            order_id: ObjectId("6756b5770dad16005ce8b63d"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b57f0dad16005ce8b650"),
            order_id: ObjectId("6756b5770dad16005ce8b63d"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b9fb0dad16005ce8b68d"),
            order_id: ObjectId("6756b9ed0dad16005ce8b679"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:35:55.859Z"),
            is_check: true,
            __v: 0
        },
    //
        {
            _id: ObjectId("6756b9fb0dad16005ce8b68e"),
            order_id: ObjectId("6756b9ed0dad16005ce8b679"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b9fb0dad16005ce8b68f"),
            order_id: ObjectId("6756b9ed0dad16005ce8b679"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756b9fb0dad16005ce8b690"),
            order_id: ObjectId("6756b9ed0dad16005ce8b679"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf6a204903ae7dc1cfd8"),
            order_id: ObjectId("6756bf00204903ae7dc1cfc8"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:59:06.079Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756bf6a204903ae7dc1cfd9"),
            order_id: ObjectId("6756bf00204903ae7dc1cfc8"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf6a204903ae7dc1cfda"),
            order_id: ObjectId("6756bf00204903ae7dc1cfc8"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf6a204903ae7dc1cfdb"),
            order_id: ObjectId("6756bf00204903ae7dc1cfc8"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf9b204903ae7dc1d01b"),
            order_id: ObjectId("6756bf95204903ae7dc1d00b"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T09:59:55.074Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756bf9b204903ae7dc1d01c"),
            order_id: ObjectId("6756bf95204903ae7dc1d00b"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf9b204903ae7dc1d01d"),
            order_id: ObjectId("6756bf95204903ae7dc1d00b"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756bf9b204903ae7dc1d01e"),
            order_id: ObjectId("6756bf95204903ae7dc1d00b"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756c00a204903ae7dc1d061"),
            order_id: ObjectId("6756c001204903ae7dc1d04f"),
            status_id: ObjectId("6741b3abfebecf90784bc244"),
            createdAt: new Date("2024-12-09T10:01:46.430Z"),
            is_check: true,
            __v: 0
        },
        {
            _id: ObjectId("6756c00a204903ae7dc1d062"),
            order_id: ObjectId("6756c001204903ae7dc1d04f"),
            status_id: ObjectId("6741b3abfebecf90784bc245"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756c00a204903ae7dc1d063"),
            order_id: ObjectId("6756c001204903ae7dc1d04f"),
            status_id: ObjectId("6741b3abfebecf90784bc246"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
        {
            _id: ObjectId("6756c00a204903ae7dc1d064"),
            order_id: ObjectId("6756c001204903ae7dc1d04f"),
            status_id: ObjectId("6741b3abfebecf90784bc247"),
            createdAt: null,
            is_check: false,
            __v: 0
        },
    ]
)

// payment
db.createCollection('payment');
db.payment.insertMany(
    [
        {
            _id: ObjectId("674b29b43521e6fef9223b31"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("674b29753521e6fef9223b1c"),
            total_money: 611.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c0e1fad080d212b4b1aae"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c0c5aad080d212b4b1a95"),
            total_money: 611.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c1001ad080d212b4b1aea"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c0e46ad080d212b4b1acf"),
            total_money: 963.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c1ff2a50614d7a28b459a"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c1fe8a50614d7a28b4583"),
            total_money: 765.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c20a8a50614d7a28b45d8"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("674c2082a50614d7a28b45c1"),
            total_money: 473,
            __v: 0,
        },
        {
            _id: ObjectId("674c544c1b90b0d7e35c72db"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c54411b90b0d7e35c72c6"),
            total_money: 138.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c635ce5063c9398680547"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c635ce5063c9398680536"),
            total_money: 963.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c63ede5063c939868055f"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c63ede5063c939868054e"),
            total_money: 963.6,
            __v: 0,
        },
        {
            _id: ObjectId("674c64f8e5063c9398680599"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674c64f8e5063c9398680589"),
            total_money: 288.2,
            __v: 0,
        },
        {
            _id: ObjectId("674c6f1b135a45393ac38282"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("674c6f1b135a45393ac38272"),
            total_money: 616,
            __v: 0,
        },
        {
            _id: ObjectId("674efc6ae6ca0e50af3e4f5b"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("674efc3fe6ca0e50af3e4f46"),
            total_money: 616,
            __v: 0,
        },
        {
            _id: ObjectId("67569a5cadea32442451517c"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("6756975bf552000b2bae3e86"),
            total_money: 226.6,
            __v: 0,
        },
        {
            _id: ObjectId("6756a08fb4a7648736a80e4d"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("6756a03db4a7648736a80e37"),
            total_money: 693,
            __v: 0,
        },
        {
            _id: ObjectId("6756a1f8b4a7648736a80eb4"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24b"),
            order_id: ObjectId("6756a1dab4a7648736a80e9e"),
            total_money: 38.5,
            __v: 0,
        },
        {
            _id: ObjectId("6756a4f65b0ba3712239a56c"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756a4eb5b0ba3712239a556"),
            total_money: 561,
            __v: 0,
        },
        {
            _id: ObjectId("6756a7560dad16005ce8b2b0"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756a7450dad16005ce8b29a"),
            total_money: 629.2,
            __v: 0,
        },
        {
            _id: ObjectId("6756abd10dad16005ce8b354"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756aac30dad16005ce8b33c"),
            total_money: 724.9,
            __v: 0,
        },
        {
            _id: ObjectId("6756ac020dad16005ce8b396"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756abf30dad16005ce8b380"),
            total_money: 431.2,
            __v: 0,
        },
        {
            _id: ObjectId("6756ac5b0dad16005ce8b3e1"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756ac520dad16005ce8b3cb"),
            total_money: 149.6,
            __v: 0,
        },
        {
            _id: ObjectId("6756ad4b0dad16005ce8b442"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756ad430dad16005ce8b42a"),
            total_money: 1078,
            __v: 0,
        },
        {
            _id: ObjectId("6756b13f0dad16005ce8b481"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b13f0dad16005ce8b471"),
            total_money: 204.6,
            __v: 0,
        },
        {
            _id: ObjectId("6756b3410dad16005ce8b523"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b3330dad16005ce8b506"),
            total_money: 223.3,
            __v: 0,
        },
        {
            _id: ObjectId("6756b3770dad16005ce8b569"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b36c0dad16005ce8b54f"),
            total_money: 189.09,
            __v: 0,
        },
        {
            _id: ObjectId("6756b5140dad16005ce8b60f"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b5000dad16005ce8b5f5"),
            total_money: 39.27,
            __v: 0,
        },
        {
            _id: ObjectId("6756b57f0dad16005ce8b653"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b5770dad16005ce8b63d"),
            total_money: 2129.6,
            __v: 0,
        },
        {
            _id: ObjectId("6756b9fb0dad16005ce8b693"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756b9ed0dad16005ce8b679"),
            total_money: 722.7,
            __v: 0,
        },
        {
            _id: ObjectId("6756bf6a204903ae7dc1cfde"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756bf00204903ae7dc1cfc8"),
            total_money: 508.2,
            __v: 0,
        },
        {
            _id: ObjectId("6756bf9b204903ae7dc1d021"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756bf95204903ae7dc1d00b"),
            total_money: 149.6,
            __v: 0,
        },
        {
            _id: ObjectId("6756c00a204903ae7dc1d067"),
            payment_method_id: ObjectId("6741b3bafebecf90784bc24a"),
            order_id: ObjectId("6756c001204903ae7dc1d04f"),
            total_money: 149.6,
            __v: 0,
        }
    ]
)

// payment method
db.createCollection('payment_method');
db.payment_method.insertMany(
    [
        {
            _id: ObjectId("6741b3bafebecf90784bc24a"),
            payment_method_name: "Cash"
        },
        {
            _id: ObjectId("6741b3bafebecf90784bc24b"),
            payment_method_name: "PayPal"
        },
        {
            _id: ObjectId("6741b3bafebecf90784bc24c"),
            payment_method_name: "VNPAY"
        },
        {
            _id: ObjectId("6741b3bafebecf90784bc24d"),
            payment_method_name: "ZaloPay"
        }
    ]
)

// product
db.createCollection('product');
db.product.insertMany(
    [
        {
            _id: ObjectId("674138636c0973f433b151a5"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Redmi 10 Power",
            product_description: "The Redmi 10 Power offers a 6.7-inch FHD+ display, Snapdragon processor, and up to 8GB RAM. Its 5000mAh battery ensures long usage, while the 50MP camera captures stunning photos, making it ideal for everyday use.",
            product_price: 550,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732263674/NodeJS_FinalProject/products/phones/sttifuke2fubios76hrf.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151a6"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "OnePlus Nord CE 2 Lite 5G",
            product_description: "The OnePlus Nord CE 2 Lite 5G offers a 6.59-inch FHD+ display, Snapdragon 695 chipset, 6GB/8GB RAM, and a 5000mAh battery. Its 64MP primary camera delivers impressive photos, making it a great mid-range 5G option.",
            product_price: 256,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732373151/NodeJS_FinalProject/products/phones/ih2dxa07njzdxmodipl3.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151a7"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy M33 5G",
            product_description: "The Samsung Galaxy M33 5G features a 6.6-inch FHD+ display, Exynos 1280 chipset, 6GB/8GB RAM, and a 6000mAh battery. It offers a 50MP quad-camera setup, perfect for users looking for a solid mid-range 5G phone with great performance and battery life.",
            product_price: 320,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732375504/NodeJS_FinalProject/products/phones/sjy6z8g7mxbjadz5fpdg.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151a8"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Realme Narzo 50A Prime",
            product_description: "The Realme Narzo 50A Prime comes with a 6.6-inch FHD+ display, MediaTek Helio G85 chipset, and up to 4GB RAM. It offers a 50MP triple-camera setup and a large 5000mAh battery, making it an excellent choice for budget-conscious users seeking performance and durability.",
            product_price: 140,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732377686/NodeJS_FinalProject/products/phones/etuprpamzpl9kxwvd6f1.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151a9"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Xiaomi Redmi A1",
            product_description: "The Redmi A1 features a 6.52-inch Full HD+ display, MediaTek Helio A22 chipset, and 2GB/3GB RAM. It offers a 13MP dual-camera setup and a 5000mAh battery, providing excellent value for users seeking an affordable smartphone with essential features.",
            product_price: 100,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732378401/NodeJS_FinalProject/products/phones/g96gqpjdoskqeigwjbfu.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151aa"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Xiaomi Redmi 10A",
            product_description: "The Redmi 10A features a 6.53-inch HD+ display, MediaTek Helio G25 chipset, and 3GB/4GB RAM. With a 13MP rear camera and a 5000mAh battery, it offers great value for those seeking a budget-friendly smartphone with decent performance and battery life.",
            product_price: 120,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732435757/NodeJS_FinalProject/products/phones/rouw74co6k5wmlcw8cce.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ab"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "OnePlus 11R 5G",
            product_description: "The OnePlus 11R 5G features a 6.74-inch FHD+ AMOLED display, Snapdragon 8+ Gen 1 chipset, up to 12GB RAM, and a 5000mAh battery. Its 50MP primary camera with Optical Image Stabilization (OIS) ensures sharp photos, while the 100W fast charging delivers rapid power-up.",
            product_price: 500,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732436415/NodeJS_FinalProject/products/phones/wcxugixffrurystkwyrm.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ac"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "OnePlus Nord 2T 5G",
            product_description: "The OnePlus Nord 2T 5G comes with a 6.43-inch FHD+ AMOLED display, MediaTek Dimensity 1300 chipset, up to 12GB RAM, and a 4500mAh battery. Its 50MP triple-camera setup with OIS ensures sharp photos, and its 80W SuperVOOC charging delivers rapid power-up.",
            product_price: 360,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732437739/NodeJS_FinalProject/products/phones/vusnbeblqsubtrwcrn7f.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ad"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "iQOO Z6 Lite 5G by Vivo",
            product_description: "The iQOO Z6 Lite 5G features a 6.58-inch FHD+ display, Qualcomm Snapdragon 695 5G chipset, and up to 6GB RAM. It comes with a 50MP dual-camera setup, a 5000mAh battery, and supports 18W fast charging, offering solid performance and 5G connectivity at an affordable price.",
            product_price: 185,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732439031/NodeJS_FinalProject/products/phones/vgo6ktcyqknbvhxf47dk.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ae"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Oppo A78 5G",
            product_description: "The Oppo A78 5G features a 6.56-inch HD+ display, MediaTek Dimensity 700 chipset, and up to 8GB RAM. With a 50MP dual-camera setup and a 5000mAh battery, it provides 5G connectivity, excellent performance, and long battery life, making it a solid choice for budget-conscious users.",
            product_price: 185,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732441743/NodeJS_FinalProject/products/phones/akk22l2fhf28wcckz4if.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151af"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy M04",
            product_description: "The Samsung Galaxy M04 features a 6.5-inch HD+ display, MediaTek Helio P35 chipset, and up to 4GB RAM. It comes with a 13MP dual-camera setup and a 5000mAh battery, delivering excellent performance for everyday use, all while offering great value for budget-conscious users.",
            product_price: 185,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732443088/NodeJS_FinalProject/products/phones/gvllsqppdoigdh0lk8ih.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b0"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Redmi Note 11",
            product_description: "The Redmi Note 11 features a 6.43-inch FHD+ AMOLED display, Qualcomm Snapdragon 680 chipset, and up to 6GB RAM. It boasts a 50MP quad-camera setup, a 5000mAh battery, and 33W fast charging, offering a smooth user experience and excellent value for money.",
            product_price: 185,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732443624/NodeJS_FinalProject/products/phones/hcjjklx1izh0y2htqsxt.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b1"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Oppo F21s Pro",
            product_description: "The Oppo F21s Pro features a 6.43-inch FHD+ AMOLED display, Qualcomm Snapdragon 695 5G chipset, and up to 8GB RAM. It offers a 64MP triple-camera system, a 4500mAh battery, and supports 33W SuperVOOC fast charging, delivering excellent performance, stunning photos, and long-lasting power.",
            product_price: 340,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732443980/NodeJS_FinalProject/products/phones/dczpq7rqw9zm8i0c0axu.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b2"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "OPPO A74 5G",
            product_description: "The OPPO A74 5G features a 6.5-inch FHD+ display with a 90Hz refresh rate, Qualcomm Snapdragon 480 5G chipset, and up to 6GB RAM. It has a 48MP triple-camera setup, a 5000mAh battery, and supports 18W fast charging, providing excellent performance and 5G connectivity at an affordable price.",
            product_price: 320,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732444261/NodeJS_FinalProject/products/phones/jcwmnmzkyqzlfybb1ivm.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        
    //     
        {
            _id: ObjectId("674138636c0973f433b151b3"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy M13",
            product_description: "The Samsung Galaxy M13 features a 6.6-inch FHD+ display, Exynos 850 chipset, and up to 4GB RAM. It comes with a 50MP triple-camera setup, a 5000mAh battery, and supports 15W fast charging, offering solid performance and a great multimedia experience for everyday users.",
            product_price: 140,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732444576/NodeJS_FinalProject/products/phones/oas00jcd3c4vibxkpdgl.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b4"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Realme Narzo 50 Pro 5G",
            product_description: "The Realme Narzo 50 Pro 5G features a 6.4-inch FHD+ AMOLED display, MediaTek Dimensity 920 5G chipset, and up to 6GB RAM. It comes with a 48MP triple-camera setup, a 5000mAh battery, and supports 33W Dart charging, delivering powerful performance, excellent display quality, and long-lasting power.",
            product_price: 170,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732444968/NodeJS_FinalProject/products/phones/geqfohzmvt3sufmqmgsj.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b5"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Redmi 9A Sport",
            product_description: "The Redmi 9A Sport features a 6.53-inch HD+ display, MediaTek Helio G25 chipset, and 2GB RAM. It comes with a 13MP single-camera setup, a 5000mAh battery, offering a great budget experience with long-lasting battery life and decent performance for daily tasks.",
            product_price: 130,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732445250/NodeJS_FinalProject/products/phones/necduqfupkpbldmexcmx.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b6"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Realme Narzo 50i Prime",
            product_description: "The Realme Narzo 50i Prime features a 6.5-inch HD+ display, Unisoc T612 chipset, and 4GB RAM. It comes with an 8MP rear camera, a 5000mAh battery, offering solid performance for everyday tasks, long-lasting battery life, and a smooth viewing experience.",
            product_price: 130,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732524684/NodeJS_FinalProject/products/phones/so44oeuqglzyawqqxiru.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b7"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "iQOO Neo 7 5G",
            product_description: "The iQOO Neo 7 5G features a 6.78-inch FHD+ AMOLED display with a 120Hz refresh rate, MediaTek Dimensity 8200 5G chipset, and up to 12GB RAM. It comes with a 50MP triple-camera setup, a 5000mAh battery, and supports 120W fast charging, delivering top-tier performance, display quality, and charging speed.",
            product_price: 130,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732525633/NodeJS_FinalProject/products/phones/bknm5jg8fp125hhjclmf.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b8"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "OnePlus 10R 5G",
            product_description: "The OnePlus 10R 5G features a 6.7-inch FHD+ AMOLED display with a 120Hz refresh rate, MediaTek Dimensity 8100 5G chipset, and up to 12GB RAM. It comes with a 50MP triple-camera setup, a 4500mAh battery, and supports 150W fast charging, delivering premium performance, an immersive display, and ultra-fast charging capabilities.",
            product_price: 370,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546145/NodeJS_FinalProject/products/phones/bkmqti7hgcx0qmmqyyfc.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151b9"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "iQOO Z6 5G by vivo",
            product_description: "The iQOO Z6 5G features a 6.58-inch FHD+ display with a 120Hz refresh rate, Qualcomm Snapdragon 695 5G chipset, and up to 8GB RAM. It comes with a 50MP triple-camera setup, a 5000mAh battery, and supports 18W fast charging, offering strong performance, smooth visuals, and solid battery life for everyday use.",
            product_price: 180,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546277/NodeJS_FinalProject/products/phones/ajytbsypczqqjhxvef8v.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ba"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy S20 FE 5G",
            product_description: "The Samsung Galaxy S20 FE 5G features a 6.5-inch FHD+ Super AMOLED display with a 120Hz refresh rate, Qualcomm Snapdragon 865 chipset, and up to 8GB RAM. It comes with a 12MP triple-camera setup, a 4500mAh battery, and supports 25W fast charging, offering premium performance, an immersive display, and 5G connectivity.",
            product_price: 625,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546513/NodeJS_FinalProject/products/phones/ufwz7gqbt6nxv7xbyygt.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151bb"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy M53 5G",
            product_description: "The Samsung Galaxy M53 5G features a 6.7-inch FHD+ Super AMOLED Plus display with a 120Hz refresh rate, MediaTek Dimensity 900 5G chipset, and up to 8GB RAM. It comes with a 108MP quad-camera setup, a 5000mAh battery, and supports 25W fast charging, offering great performance, an immersive display, and powerful 5G connectivity.",
            product_price: 491,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546584/NodeJS_FinalProject/products/phones/qn7b9w3884rd5bqfpmm4.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151bc"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy M32 Prime Edition",
            product_description: "The Samsung Galaxy M32 Prime Edition features a 6.4-inch FHD+ Super AMOLED display with a 90Hz refresh rate, MediaTek Helio G80 chipset, and 6GB RAM. It comes with a 64MP quad-camera setup, a 6000mAh battery, and supports 15W fast charging, providing strong performance, an immersive display, and long-lasting battery life for everyday use.",
            product_price: 185,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546717/NodeJS_FinalProject/products/phones/g0rui0rquun9rvs7x2pq.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151bd"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy S21 FE 5G",
            product_description: "The Samsung Galaxy S21 FE 5G features a 6.4-inch FHD+ Dynamic AMOLED 2X display with a 120Hz refresh rate, Qualcomm Snapdragon 888 chipset, and up to 8GB RAM. It comes with a 12MP triple-camera setup, a 4500mAh battery, and supports 25W fast charging, providing flagship-level performance, smooth visuals, and 5G connectivity.",
            product_price: 452,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546815/NodeJS_FinalProject/products/phones/qp0kysmqcoynhbo2ixek.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151be"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy A14 5G",
            product_description: "The Samsung Galaxy A14 5G features a 6.6-inch FHD+ PLS LCD display with a 90Hz refresh rate, MediaTek Dimensity 700 chipset, and 4GB RAM. It comes with a 50MP triple-camera setup, a 5000mAh battery, and supports 15W fast charging, delivering solid performance and 5G connectivity at an affordable price point.",
            product_price: 176,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546896/NodeJS_FinalProject/products/phones/x6hxb7ac3feqvomtb3h6.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151bf"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy S23 Ultra 5G",
            product_description: "The Samsung Galaxy S23 Ultra 5G features a 6.8-inch Quad HD+ Dynamic AMOLED 2X display with a 120Hz refresh rate, Qualcomm Snapdragon 8 Gen 2 chipset, and up to 12GB RAM. It comes with a powerful 200MP quad-camera setup, a 5000mAh battery, and supports 45W fast charging, offering exceptional performance, stunning visuals, and top-tier 5G connectivity.",
            product_price: 642,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547001/NodeJS_FinalProject/products/phones/tpomodemfzf6nqysp809.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c0"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy S23 5G",
            product_description: "The Samsung Galaxy S23 5G features a 6.1-inch FHD+ Dynamic AMOLED 2X display with a 120Hz refresh rate, Qualcomm Snapdragon 8 Gen 2 chipset, and up to 8GB RAM. It comes with a 50MP triple-camera setup, a 3900mAh battery, and supports 25W fast charging, delivering flagship performance, a stunning display, and 5G connectivity.",
            product_price: 549,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547075/NodeJS_FinalProject/products/phones/nzsfvl0miivpndfuoh7e.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
    //
        {
            _id: ObjectId("674138636c0973f433b151c1"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy S22 5G",
            product_description: "The Samsung Galaxy S22 5G features a 6.1-inch FHD+ Dynamic AMOLED 2X display with a 120Hz refresh rate, Qualcomm Snapdragon 8 Gen 1 chipset, and up to 8GB RAM. It comes with a 50MP triple-camera setup, a 3700mAh battery, and supports 25W fast charging, delivering premium performance, stunning visuals, and seamless 5G connectivity.",
            product_price: 400,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547290/NodeJS_FinalProject/products/phones/ubujjvo3ijej8acbkogw.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c2"),
            category_id: ObjectId("673cb3eb652666000535468b"),
            product_name: "Samsung Galaxy A23 5G",
            product_description: "The Samsung Galaxy A23 5G features a 6.6-inch FHD+ PLS LCD display with a 120Hz refresh rate, Qualcomm Snapdragon 695 chipset, and 4GB/6GB RAM options. It comes with a 50MP quad-camera setup, a 5000mAh battery, and supports 25W fast charging, offering solid performance, smooth display, and reliable 5G connectivity at an affordable price.",
            product_price: 163,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547371/NodeJS_FinalProject/products/phones/awp5ur3cpkkv6nik9euu.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c3"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "DELL Latitude 5490 Core i5 7th Gen Laptop",
            product_description: "The DELL Latitude 5490 features a 14-inch FHD display, powered by an Intel Core i5 7th Gen processor, 8GB RAM, and a 512GB SSD. It offers excellent performance for business and personal use, along with a durable design, long battery life, and robust security features. Ideal for professionals who need reliability and speed for multitasking.",
            product_price: 310,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547455/NodeJS_FinalProject/products/phones/q0b7prsft9vihgx9fkdw.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c4"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "HP Chromebook C640 10th Gen Intel Core i5 Thin & Light FHD Laptop",
            product_description: "The HP Chromebook C640 features a 14-inch FHD anti-glare display, powered by a 10th Gen Intel Core i5 processor, 8GB RAM, and a 128GB SSD. With its lightweight design, long battery life, and Chrome OS, it’s an excellent choice for students and professionals who need fast, secure, and efficient computing for everyday tasks, browsing, and productivity.",
            product_price: 610,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547538/NodeJS_FinalProject/products/phones/ndji8gipx3gfj1jsfd3p.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c5"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Lenovo ThinkPad X260 High Performance 12.5 inch IPS Panel 1.5kg Laptop",
            product_description: "The Lenovo ThinkPad X260 is a high-performance 12.5-inch laptop featuring an IPS panel display. Powered by Intel Core i5 processors, 8GB RAM, and a 256GB SSD, it delivers excellent speed and reliability. Weighing just 1.5kg, it’s perfect for professionals who need a portable, durable, and powerful laptop for work, travel, and everyday tasks. The long battery life ensures all-day productivity.",
            product_price: 562,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547611/NodeJS_FinalProject/products/phones/npnhzszjcszlohshkotd.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c6"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Lenovo ThinkPad T450 Intel Core i5-5300U 14 inches Business Laptop Computer",
            product_description: "The Lenovo ThinkPad T450 is a reliable 14-inch business laptop featuring an Intel Core i5-5300U processor, 8GB RAM, and a 256GB SSD. With its durable design and full-size keyboard, it’s built for professionals who need a portable device with robust performance. Ideal for multitasking and productivity, the ThinkPad T450 ensures smooth computing for work-related tasks and everyday use.",
            product_price: 193,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547703/NodeJS_FinalProject/products/phones/bkow5o9cw7wrnuoastfs.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c7"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "HP Victus Gaming Latest FHD Gaming Laptop",
            product_description: "The HP Victus Gaming Laptop is equipped with the latest Intel Core i7 processor, NVIDIA GeForce GTX 1660 Ti graphics, 16GB RAM, and a 512GB SSD. With its 15.6-inch FHD display, it offers an immersive gaming experience with vibrant visuals and smooth gameplay. Designed for gamers, it ensures high performance and fast processing for even the most demanding games, along with a sleek and durable design for everyday use.",
            product_price: 750,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547808/NodeJS_FinalProject/products/phones/xzdij9cija2oycweree7.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c8"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen",
            product_description: "The Acer Aspire 5 Gaming Laptop is powered by the latest Intel Core i5 12th generation processor, offering smooth multitasking and performance for gaming and productivity tasks. It features a 15.6-inch Full HD display, 8GB RAM, and a 512GB SSD, making it ideal for gaming enthusiasts and professionals. With its slim design, long-lasting battery life, and fast performance, the Aspire 5 is a perfect choice for both work and play.",
            product_price: 649,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548020/NodeJS_FinalProject/products/phones/lg5qi5ymyiywplyfulw2.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151c9"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "HP Pavilion 14 FHD Gaming Laptop",
            product_description: "The HP Pavilion FHD Gaming Laptop is designed for high-performance gaming and multitasking. It is powered by an Intel Core i7 processor, 16GB RAM, and a 512GB SSD. The 15.6-inch Full HD display offers crisp visuals, while the NVIDIA GeForce GTX graphics ensure smooth gameplay. Ideal for gamers looking for powerful performance and a sleek design, the HP Pavilion is a perfect blend of speed, reliability, and style.",
            product_price: 590,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548219/NodeJS_FinalProject/products/phones/s3ugiqjifsfold2jwbzl.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ca"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "ASUS TUF Gaming A15 Laptop",
            product_description: "The ASUS TUF Gaming A15 is built for performance with a powerful AMD Ryzen 7 5800H processor, NVIDIA GeForce RTX 3060 graphics, and a 15.6-inch Full HD display. Equipped with 16GB RAM and a 512GB SSD, it ensures fast load times and smooth gameplay. The durable design, enhanced cooling system, and military-grade build make it perfect for gamers who need a reliable machine for long sessions and heavy tasks.",
            product_price: 688,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548326/NodeJS_FinalProject/products/phones/loaaw8hobifhihubgiwq.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151cb"),
            category_id: ObjectId("673cb3eb652666000535468c"),
            product_name: "Lenovo Ideapad Gaming 3",
            product_description: "The Lenovo Ideapad Gaming 3 is a powerful gaming laptop designed to handle intensive tasks with ease. Powered by the AMD Ryzen 5 5600H processor and NVIDIA GeForce GTX 1650 graphics, it offers smooth gameplay and multitasking performance. Featuring a 15.6-inch Full HD display with a 120Hz refresh rate, 8GB RAM, and a 512GB SSD, this laptop delivers an immersive gaming experience and fast load times, all within a durable and sleek design.",
            product_price: 876,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548414/NodeJS_FinalProject/products/phones/righyjleqb7fvtfvlb6l.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151cd"),
            category_id: ObjectId("673cb3eb652666000535468d"),
            product_name: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds",
            product_description: "The Lenovo Ideapad Gaming 3 is a powerful gaming laptop designed to handle intensive tasks with ease. Powered by the AMD Ryzen 5 5600H processor and NVIDIA GeForce GTX 1650 graphics, it offers smooth gameplay and multitasking performance. Featuring a 15.6-inch Full HD display with a 120Hz refresh rate, 8GB RAM, and a 512GB SSD, this laptop delivers an immersive gaming experience and fast load times, all within a durable and sleek design.",
            product_price: 45,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548529/NodeJS_FinalProject/products/phones/pllyenszfiuewbjd5azl.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151ce"),
            category_id: ObjectId("673cb3eb652666000535468d"),
            product_name: "JBL C100SI Wired In Ear Headphones",
            product_description: "The JBL C100SI offers premium sound quality with powerful bass and crystal-clear audio. Designed for comfort, these lightweight wired in-ear headphones include three sizes of ear tips to ensure a perfect fit. The built-in microphone with a universal button remote allows hands-free calling and easy music control. With a sleek design and iconic JBL sound, these headphones are perfect for music enthusiasts on the go.",
            product_price: 629,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548661/NodeJS_FinalProject/products/phones/metf3trfn55oqzulc388.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151cf"),
            category_id: ObjectId("673cb3eb652666000535468d"),
            product_name: "realme TechLife Buds T100 Bluetooth Truly Wireless in Ear Earbuds",
            product_description: "The realme TechLife Buds T100 deliver an immersive audio experience with 10mm dynamic bass drivers and Bluetooth v5.3 for seamless connectivity. With up to 28 hours of total playback, these earbuds are designed for extended use. Featuring AI ENC for clear calls and IPX5 water resistance, they are perfect for workouts and daily use. The Buds T100 also offer touch controls for effortless music and call management, along with a lightweight ergonomic design for maximum comfort.",
            product_price: 29,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548723/NodeJS_FinalProject/products/phones/v328hxi5okpfjb1y4fpc.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
        {
            _id: ObjectId("674138636c0973f433b151d0"),
            category_id: ObjectId("673cb3eb652666000535468d"),
            product_name: "Noise Buds VS104 in-Ear Truly Wireless Earbuds",
            product_description: "The Noise Buds VS104 provide an enhanced audio experience with 13mm drivers for deep bass and crisp sound. With Bluetooth v5.2 connectivity, these earbuds ensure seamless pairing and stable connections. They offer up to 30 hours of playback time, making them perfect for long usage. The lightweight ergonomic design and IPX5 water resistance make them ideal for workouts and daily activities. Touch controls allow easy management of music, calls, and voice assistants, offering convenience at your fingertips.",
            product_price: 36,
            product_img: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548788/NodeJS_FinalProject/products/phones/xszx2yewb1lsftwvtcz7.jpg",
            createdAt: new Date("2024-11-22T00:00:00Z"),
            updatedAt: new Date("2024-11-22T00:00:00Z"),
            deleted: false
        },
    ]
)

// product category
db.createCollection('product_category');
db.product_category.insertMany(
    [
        {
            _id: ObjectId("673cb3eb652666000535468b"),
            category_name: "Smartphone",
            description: "This category includes modern mobile devices that offer a blend of communication, entertainment, and productivity features. Smartphones come equipped with advanced hardware, high-resolution cameras, and powerful operating systems, making them ideal for browsing, gaming, photography, and staying connected on the go."
        },
        {
            _id: ObjectId("673cb3eb652666000535468c"),
            category_name: "Laptop",
            description: "This category features portable computers designed for productivity and versatility. Laptops combine powerful hardware, sleek designs, and high-resolution displays, making them suitable for work, study, gaming, and entertainment. They offer the convenience of mobility with the functionality of a desktop."
        },
        {
            _id: ObjectId("673cb3eb652666000535468d"),
            category_name: "Headphone",
            description: "This category includes audio devices designed for immersive sound experiences. Headphones offer high-quality sound for music, calls, gaming, and more, with options ranging from wired to wireless and noise-canceling models. They are ideal for both personal entertainment and professional use."
        },
        {
            _id: ObjectId("674e9fb2b5963e58692581d6"),
            category_name: "Sound",
            description: "This category features audio devices such as speakers, soundbars, and home theater systems designed to deliver rich and immersive audio experiences. Whether for music, movies, or gaming, these products enhance sound quality and provide powerful, clear audio for any setting.",
            __v: 0
        }
    ]
)

// product variant
db.createCollection('product_variant');
db.product_variant.insertMany(
    [
        {
            "_id": ObjectId("6745d433a409da88028f01b2"),
            "product_id": ObjectId("674138636c0973f433b151a5"),
            "product_name": "Redmi 10 Power",
            "product_color": "Power Black",
            "variant_quantity": 119,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732263674/NodeJS_FinalProject/products/phones/sttifuke2fubios76hrf.jpg",
            "retail_price": 550,
            "variant_ROM": "512GB",
            "variant_RAM": "8GB",
            "variant_operation_system": "Android 11",
            "variant_chipset": "Snapdragon 680 Octa-core 2.4 GHz Adreno 610",
            "variant_graphic_card": "",
            "variant_screen": "6.71-inch HD+ Display",
            "variant_cpu": "",
            "variant_weight": "203g",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b3"),
            "product_id": ObjectId("674138636c0973f433b151a5"),
            "product_name": "Redmi 10 Power",
            "product_color": "Sporty Orange",
            "variant_quantity": 20,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732373151/NodeJS_FinalProject/products/phones/ih2dxa07njzdxmodipl3.jpg",
            "retail_price": 600,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 11",
            "variant_chipset": "Snapdragon 680 Octa-core 2.4 GHz",
            "variant_graphic_card": "Adreno 610",
            "variant_screen": "6.71-inch HD+ Display",
            "variant_cpu": "",
            "variant_weight": "203g",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b4"),
            "product_id": ObjectId("674138636c0973f433b151a6"),
            "product_name": "OnePlus Nord CE 2 Lite 5G",
            "product_color": "Blue Tide",
            "variant_quantity": 19,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732373151/NodeJS_FinalProject/products/phones/ih2dxa07njzdxmodipl3.jpg",
            "retail_price": 256,
            "variant_ROM": "128 GB",
            "variant_RAM": "6 GB",
            "variant_operation_system": "Android 11",
            "variant_chipset": "Snapdragon 695 5G",
            "variant_graphic_card": "Adreno 619",
            "variant_screen": "6.59-inch Full HD+ Display",
            "variant_cpu": "",
            "variant_weight": "203g",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b5"),
            "product_id": ObjectId("674138636c0973f433b151a6"),
            "product_name": "OnePlus Nord CE 2 Lite 5G",
            "product_color": "Black Dusk",
            "variant_quantity": 19,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732374928/NodeJS_FinalProject/products/phones/ianonmpuibvtu9t8xag4.jpg",
            "retail_price": 260,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 11",
            "variant_chipset": "Snapdragon 695 5G",
            "variant_graphic_card": "Adreno 619",
            "variant_screen": "6.59-inch Full HD+ Display",
            "variant_cpu": "",
            "variant_weight": "203g",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b6"),
            "product_id": ObjectId("674138636c0973f433b151a7"),
            "product_name": "Samsung Galaxy M33 5G",
            "product_color": "Mystique Green",
            "variant_quantity": 8,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732375504/NodeJS_FinalProject/products/phones/sjy6z8g7mxbjadz5fpdg.jpg",
            "retail_price": 320,
            "variant_ROM": "128 GB",
            "variant_RAM": "6 GB",
            "variant_operation_system": "Android 11",
            "variant_chipset": "Exynos 1280",
            "variant_graphic_card": "",
            "variant_screen": "6.6-inch Full HD+ (1080 x 2408 Pixels)",
            "variant_cpu": "",
            "variant_weight": "203g",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b7"),
            "product_id": ObjectId("674138636c0973f433b151a7"),
            "product_name": "Samsung Galaxy M33 5G",
            "product_color": "Mystique Green",
            "variant_quantity": 10,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732375504/NodeJS_FinalProject/products/phones/sjy6z8g7mxbjadz5fpdg.jpg",
            "retail_price": 320,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 11",
            "variant_chipset": "Exynos 1280",
            "variant_graphic_card": "",
            "variant_screen": "6.6-inch Full HD+ (1080 x 2408 Pixels)",
            "variant_cpu": "",
            "variant_weight": "203g",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b8"),
            "product_id": ObjectId("674138636c0973f433b151a7"),
            "product_name": "Samsung Galaxy M33 5G",
            "product_color": "Emerald Brown",
            "variant_quantity": 4,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732375894/NodeJS_FinalProject/products/phones/oiglziqdhl6iqauzcm7m.jpg",
            "retail_price": 320,
            "variant_ROM": "128 GB",
            "variant_RAM": "6 GB",
            "variant_operation_system": "Android 11",
            "variant_chipset": "Exynos 1280",
            "variant_graphic_card": "",
            "variant_screen": "6.6-inch Full HD+ (1080 x 2408 Pixels)",
            "variant_cpu": "",
            "variant_weight": "203g",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01b9"),
            "product_id": ObjectId("674138636c0973f433b151a7"),
            "product_name": "Samsung Galaxy M33 5G",
            "product_color": "Emerald Brown",
            "variant_quantity": 5,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732375894/NodeJS_FinalProject/products/phones/oiglziqdhl6iqauzcm7m.jpg",
            "retail_price": 320,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 11",
            "variant_chipset": "Exynos 1280",
            "variant_graphic_card": "",
            "variant_screen": "6.6-inch Full HD+ (1080 x 2408 Pixels)",
            "variant_cpu": "",
            "variant_weight": "203g",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01ba"),
            "product_id": ObjectId("674138636c0973f433b151a7"),
            "product_name": "Samsung Galaxy M33 5G",
            "product_color": "Deep Ocean Blue",
            "variant_quantity": 5,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732376675/NodeJS_FinalProject/products/phones/ovfbmy4vyon6lnxsf4ry.jpg",
            "retail_price": 340,
            "variant_ROM": "128 GB",
            "variant_RAM": "6 GB",
            "variant_operation_system": "Android 11",
            "variant_chipset": "Exynos 1280",
            "variant_graphic_card": "",
            "variant_screen": "6.6-inch Full HD+ (1080 x 2408 Pixels)",
            "variant_cpu": "",
            "variant_weight": "203g",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
        {
            "_id": ObjectId("6745d433a409da88028f01bb"),
            "product_id": ObjectId("674138636c0973f433b151a7"),
            "product_name": "Samsung Galaxy M33 5G",
            "product_color": "Deep Ocean Blue",
            "variant_quantity": 5,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732376675/NodeJS_FinalProject/products/phones/ovfbmy4vyon6lnxsf4ry.jpg",
            "retail_price": 340,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 11",
            "variant_chipset": "Exynos 1280",
            "variant_graphic_card": "",
            "variant_screen": "6.6-inch Full HD+ (1080 x 2408 Pixels)",
            "variant_cpu": "",
            "variant_weight": "203g",
            "createdAt": new Date("2024-11-22T00:00:00Z"),
            "updatedAt": new Date("2024-11-22T00:00:00Z")
        },
    //
        {
            _id: ObjectId("6745d433a409da88028f01bc"),
            product_id: ObjectId("674138636c0973f433b151a8"),
            product_name: "Realme Narzo 50A Prime",
            product_color: "Flash Black",
            variant_quantity: 24,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732377686/NodeJS_FinalProject/products/phones/etuprpamzpl9kxwvd6f1.jpg",
            retail_price: 140,
            variant_ROM: "64 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 11",
            variant_chipset: "Unisoc Tiger T612",
            variant_graphic_card: "",
            variant_screen: "6.6-inch Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01bd"),
            product_id: ObjectId("674138636c0973f433b151a8"),
            product_name: "Realme Narzo 50A Prime",
            product_color: "Flash Blue",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732377978/NodeJS_FinalProject/products/phones/dqd7gimbiiopvp2hprp7.jpg",
            retail_price: 140,
            variant_ROM: "64 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 11",
            variant_chipset: "Unisoc Tiger T612",
            variant_graphic_card: "",
            variant_screen: "6.6-inch Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01be"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            product_name: "Xiaomi Redmi A1",
            product_color: "Light Blue",
            variant_quantity: 19,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732378401/NodeJS_FinalProject/products/phones/g96gqpjdoskqeigwjbfu.jpg",
            retail_price: 100,
            variant_ROM: "32 GB",
            variant_RAM: "2 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "MediaTek MT6761 (Helio A22)",
            variant_graphic_card: "IMG PowerVR GE8300",
            variant_screen: "6.52-inch Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01bf"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            product_name: "Xiaomi Redmi A1",
            product_color: "Black",
            variant_quantity: 18,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732378637/NodeJS_FinalProject/products/phones/jxxtveyjbehede2ihsgj.jpg",
            retail_price: 100,
            variant_ROM: "32 GB",
            variant_RAM: "2 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "MediaTek MT6761 (Helio A22)",
            variant_graphic_card: "IMG PowerVR GE8300",
            variant_screen: "6.52-inch Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01c0"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            product_name: "Xiaomi Redmi A1",
            product_color: "Light Green",
            variant_quantity: 21,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732378911/NodeJS_FinalProject/products/phones/nwuyj5cjawu4yijs5oat.jpg",
            retail_price: 100,
            variant_ROM: "32 GB",
            variant_RAM: "2 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "MediaTek MT6761 (Helio A22)",
            variant_graphic_card: "IMG PowerVR GE8300",
            variant_screen: "6.52-inch Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01c1"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            product_name: "Xiaomi Redmi 10A",
            product_color: "Charcoal Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732435757/NodeJS_FinalProject/products/phones/rouw74co6k5wmlcw8cce.jpg",
            retail_price: 120,
            variant_ROM: "64 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "MediaTek Helio G25",
            variant_graphic_card: "",
            variant_screen: "6.53-inch HD+ (1600 x 720 Pixels)",
            variant_cpu: "Octa-core CPU, up to 2.0GHz",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01c2"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            product_name: "Xiaomi Redmi 10A",
            product_color: "Slate Grey",
            variant_quantity: 7,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732436082/NodeJS_FinalProject/products/phones/gfo9qqinqzugmgedtbwn.jpg",
            retail_price: 120,
            variant_ROM: "64 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "MediaTek Helio G25",
            variant_graphic_card: "",
            variant_screen: "6.53-inch HD+ (1600 x 720 Pixels)",
            variant_cpu: "Octa-core CPU, up to 2.0GHz",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01c3"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            product_name: "Xiaomi Redmi 10A",
            product_color: "Sea Blue",
            variant_quantity: 9,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732436254/NodeJS_FinalProject/products/phones/c4quq0zuatga3oaq0yf8.jpg",
            retail_price: 120,
            variant_ROM: "64 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "MediaTek Helio G25",
            variant_graphic_card: "",
            variant_screen: "6.53-inch HD+ (1600 x 720 Pixels)",
            variant_cpu: "Octa-core CPU, up to 2.0GHz",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01c4"),
            product_id: ObjectId("674138636c0973f433b151ab"),
            product_name: "OnePlus 11R 5G",
            product_color: "Galactic Silver",
            variant_quantity: 20,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732436415/NodeJS_FinalProject/products/phones/wcxugixffrurystkwyrm.jpg",
            retail_price: 500,
            variant_ROM: "256 GB",
            variant_RAM: "16 GB",
            variant_operation_system: "Android 13, OxygenOS 13",
            variant_chipset: "Qualcomm SM8475 Snapdragon 8+ Gen 1",
            variant_graphic_card: "Adreno 730",
            variant_screen: "6.74-inch Fluid AMOLED (1240 x 2772 Pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01c5"),
            product_id: ObjectId("674138636c0973f433b151ab"),
            product_name: "OnePlus 11R 5G",
            product_color: "Sonic Black",
            variant_quantity: 19,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732437568/NodeJS_FinalProject/products/phones/hcnqzb8dfp1wv1e8mhbp.jpg",
            retail_price: 500,
            variant_ROM: "256 GB",
            variant_RAM: "16 GB",
            variant_operation_system: "Android 13, OxygenOS 13",
            variant_chipset: "Qualcomm SM8475 Snapdragon 8+ Gen 1",
            variant_graphic_card: "Adreno 730",
            variant_screen: "6.74-inch Fluid AMOLED (1240 x 2772 Pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
    //
        {
            _id: ObjectId("6745d433a409da88028f01c6"),
            product_id: ObjectId("674138636c0973f433b151ac"),
            product_name: "OnePlus Nord 2T 5G",
            product_color: "Jade Fog",
            variant_quantity: 20,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732437739/NodeJS_FinalProject/products/phones/vusnbeblqsubtrwcrn7f.jpg",
            retail_price: 360,
            variant_ROM: "256 GB",
            variant_RAM: "12 GB",
            variant_operation_system: "Android 12, OxygenOS 12",
            variant_chipset: "Dimensity 1300",
            variant_graphic_card: "",
            variant_screen: "6.43-inch AMOLED (2400 x 1080 Pixels)",
            variant_cpu: "",
            variant_weight: "110g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01c7"),
            product_id: ObjectId("674138636c0973f433b151ac"),
            product_name: "OnePlus Nord 2T 5G",
            product_color: "Gray Shadow",
            variant_quantity: 23,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732438418/NodeJS_FinalProject/products/phones/llbbyhe5bqhgmyyw4ojf.jpg",
            retail_price: 360,
            variant_ROM: "256 GB",
            variant_RAM: "12 GB",
            variant_operation_system: "Android 12, OxygenOS 12",
            variant_chipset: "Dimensity 1300",
            variant_graphic_card: "",
            variant_screen: "6.43-inch AMOLED (2400 x 1080 Pixels)",
            variant_cpu: "",
            variant_weight: "110g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01c8"),
            product_id: ObjectId("674138636c0973f433b151ad"),
            product_name: "iQOO Z6 Lite 5G by Vivo",
            product_color: "Stellar Green",
            variant_quantity: 24,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732439031/NodeJS_FinalProject/products/phones/vgo6ktcyqknbvhxf47dk.jpg",
            retail_price: 185,
            variant_ROM: "64 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "Adreno 619",
            variant_graphic_card: "",
            variant_screen: "6.58-inch Full HD+ (1080 x 2408 Pixels)",
            variant_cpu: "",
            variant_weight: "110g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01c9"),
            product_id: ObjectId("674138636c0973f433b151ad"),
            product_name: "iQOO Z6 Lite 5G by Vivo",
            product_color: "Mystic Night",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732441479/NodeJS_FinalProject/products/phones/wbr22tpbvlrazenewqbl.jpg",
            retail_price: 185,
            variant_ROM: "64 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "Adreno 619",
            variant_graphic_card: "",
            variant_screen: "6.58-inch Full HD+ (1080 x 2408 Pixels)",
            variant_cpu: "",
            variant_weight: "110g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01ca"),
            product_id: ObjectId("674138636c0973f433b151ae"),
            product_name: "Oppo A78 5G",
            product_color: "Glowing Blue",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732441743/NodeJS_FinalProject/products/phones/akk22l2fhf28wcckz4if.jpg",
            retail_price: 185,
            variant_ROM: "128 GB",
            variant_RAM: "8 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "MediaTek Dimensity 700",
            variant_graphic_card: "Mali-G57 MC2",
            variant_screen: "6.58-inch Full HD+ (720 x 1612 Pixels)",
            variant_cpu: "",
            variant_weight: "110g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01cb"),
            product_id: ObjectId("674138636c0973f433b151ae"),
            product_name: "Oppo A78 5G",
            product_color: "Glowing Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732442145/NodeJS_FinalProject/products/phones/p2y2cuvcejbkuotxotxa.jpg",
            retail_price: 185,
            variant_ROM: "128 GB",
            variant_RAM: "8 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "MediaTek Dimensity 700",
            variant_graphic_card: "Mali-G57 MC2",
            variant_screen: "6.58-inch Full HD+ (720 x 1612 Pixels)",
            variant_cpu: "",
            variant_weight: "110g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01cc"),
            product_id: ObjectId("674138636c0973f433b151af"),
            product_name: "Samsung Galaxy M04",
            product_color: "Light Green",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732443088/NodeJS_FinalProject/products/phones/gvllsqppdoigdh0lk8ih.jpg",
            retail_price: 185,
            variant_ROM: "64 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "MediaTek Helio G35",
            variant_graphic_card: "",
            variant_screen: "6.5-inch Full HD+ (720 x 1612 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01cd"),
            product_id: ObjectId("674138636c0973f433b151af"),
            product_name: "Samsung Galaxy M04",
            product_color: "Light Green",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732443088/NodeJS_FinalProject/products/phones/gvllsqppdoigdh0lk8ih.jpg",
            retail_price: 185,
            variant_ROM: "64 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "MediaTek Helio G35",
            variant_graphic_card: "",
            variant_screen: "6.5-inch Full HD+ (720 x 1612 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01ce"),
            product_id: ObjectId("674138636c0973f433b151af"),
            product_name: "Samsung Galaxy M04",
            product_color: "Dark Blue",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732443407/NodeJS_FinalProject/products/phones/ewts0gk23w1rswmgib0v.jpg",
            retail_price: 185,
            variant_ROM: "64 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "MediaTek Helio G35",
            variant_graphic_card: "",
            variant_screen: "6.5-inch Full HD+ (720 x 1612 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01cf"),
            product_id: ObjectId("674138636c0973f433b151b0"),
            product_name: "Redmi Note 11",
            product_color: "Space Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732443624/NodeJS_FinalProject/products/phones/hcjjklx1izh0y2htqsxt.jpg",
            retail_price: 185,
            variant_ROM: "128 GB",
            variant_RAM: "6 GB",
            variant_operation_system: "Android 11",
            variant_chipset: "Snapdragon 680",
            variant_graphic_card: "",
            variant_screen: "6.5-inch AMOLED Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
    //
        {
            _id: ObjectId("6745d433a409da88028f01d0"),
            product_id: ObjectId("674138636c0973f433b151b0"),
            product_name: "Redmi Note 11",
            product_color: "Horizon Blue",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732443738/NodeJS_FinalProject/products/phones/r1yjnnwjxjjmnncfws8p.jpg",
            retail_price: 185,
            variant_ROM: "128 GB",
            variant_RAM: "6 GB",
            variant_operation_system: "Android 11",
            variant_chipset: "Snapdragon 680",
            variant_graphic_card: "",
            variant_screen: "6.5-inch AMOLED Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d1"),
            product_id: ObjectId("674138636c0973f433b151b1"),
            product_name: "Oppo F21s Pro",
            product_color: "Dawnlight Gold",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732443980/NodeJS_FinalProject/products/phones/dczpq7rqw9zm8i0c0axu.jpg",
            retail_price: 340,
            variant_ROM: "128 GB",
            variant_RAM: "8 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "Snapdragon 680",
            variant_graphic_card: "Adreno 610",
            variant_screen: "6.43-inch AMOLED Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d2"),
            product_id: ObjectId("674138636c0973f433b151b1"),
            product_name: "Oppo F21s Pro",
            product_color: "Starlight Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732444087/NodeJS_FinalProject/products/phones/bzt1tqjz5m39jcuk1wq9.jpg",
            retail_price: 340,
            variant_ROM: "128 GB",
            variant_RAM: "8 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "Snapdragon 680",
            variant_graphic_card: "Adreno 610",
            variant_screen: "6.43-inch AMOLED Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d3"),
            product_id: ObjectId("674138636c0973f433b151b2"),
            product_name: "OPPO A74 5G",
            product_color: "Fantastic Purple",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732444261/NodeJS_FinalProject/products/phones/jcwmnmzkyqzlfybb1ivm.jpg",
            retail_price: 320,
            variant_ROM: "256 GB",
            variant_RAM: "6 GB",
            variant_operation_system: "Android 11",
            variant_chipset: "Snapdragon 480 5G",
            variant_graphic_card: "Adreno 619",
            variant_screen: "6.5-inch Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d4"),
            product_id: ObjectId("674138636c0973f433b151b2"),
            product_name: "OPPO A74 5G",
            product_color: "Fluid Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732444358/NodeJS_FinalProject/products/phones/qp4l0ynmn9f1harxb61x.jpg",
            retail_price: 320,
            variant_ROM: "256 GB",
            variant_RAM: "6 GB",
            variant_operation_system: "Android 11",
            variant_chipset: "Snapdragon 480 5G",
            variant_graphic_card: "Adreno 619",
            variant_screen: "6.5-inch Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d5"),
            product_id: ObjectId("674138636c0973f433b151b3"),
            product_name: "Samsung Galaxy M13",
            product_color: "Aqua Green",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732444576/NodeJS_FinalProject/products/phones/oas00jcd3c4vibxkpdgl.jpg",
            retail_price: 140,
            variant_ROM: "128 GB",
            variant_RAM: "6 GB",
            variant_operation_system: "Android 11",
            variant_chipset: "Exynos 850",
            variant_graphic_card: "",
            variant_screen: "6.6-inch Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d6"),
            product_id: ObjectId("674138636c0973f433b151b3"),
            product_name: "Samsung Galaxy M13",
            product_color: "Midnight Blue",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732444694/NodeJS_FinalProject/products/phones/vjk5p7gsk3h18ul35e9u.jpg",
            retail_price: 140,
            variant_ROM: "128 GB",
            variant_RAM: "6 GB",
            variant_operation_system: "Android 11",
            variant_chipset: "Exynos 850",
            variant_graphic_card: "",
            variant_screen: "6.6-inch Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d7"),
            product_id: ObjectId("674138636c0973f433b151b3"),
            product_name: "Samsung Galaxy M13",
            product_color: "Stardust Brown",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732444771/NodeJS_FinalProject/products/phones/caoyavarfluv4hnfz1pf.jpg",
            retail_price: 140,
            variant_ROM: "128 GB",
            variant_RAM: "6 GB",
            variant_operation_system: "Android 11",
            variant_chipset: "Exynos 850",
            variant_graphic_card: "",
            variant_screen: "6.6-inch Full HD+ (1080 x 2400 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d8"),
            product_id: ObjectId("674138636c0973f433b151b4"),
            product_name: "Realme Narzo 50 Pro 5G",
            product_color: "Hyper Blue",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732444968/NodeJS_FinalProject/products/phones/geqfohzmvt3sufmqmgsj.jpg",
            retail_price: 170,
            variant_ROM: "128 GB",
            variant_RAM: "6 GB",
            variant_operation_system: "Android 11",
            variant_chipset: "MediaTek Dimensity 920 5G",
            variant_graphic_card: "Mali-G68 MC4",
            variant_screen: "6.4-inch Super AMOLED Full HD+ (1080 x 2408 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01d9"),
            product_id: ObjectId("674138636c0973f433b151b4"),
            product_name: "Realme Narzo 50 Pro 5G",
            product_color: "Hyper Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732445041/NodeJS_FinalProject/products/phones/x09ps6rnfyrvyuyvyvr6.jpg",
            retail_price: 170,
            variant_ROM: "128 GB",
            variant_RAM: "6 GB",
            variant_operation_system: "Android 11",
            variant_chipset: "MediaTek Dimensity 920 5G",
            variant_graphic_card: "Mali-G68 MC4",
            variant_screen: "6.4-inch Super AMOLED Full HD+ (1080 x 2408 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
    //
        {
            "_id": ObjectId("6745d433a409da88028f01da"),
            "product_id": ObjectId("674138636c0973f433b151b5"),
            "product_name": "Redmi 9A Sport",
            "product_color": "Coral Green",
            "variant_quantity": 24,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732445250/NodeJS_FinalProject/products/phones/necduqfupkpbldmexcmx.jpg",
            "retail_price": 130,
            "variant_ROM": "32 GB",
            "variant_RAM": "3 GB",
            "variant_operation_system": "Android 10",
            "variant_chipset": "MediaTek Helio G25",
            "variant_graphic_card": "IMG PowerVR GE8320",
            "variant_screen": "6.53-inch IPS LCD HD+ (720 x 1600 Pixels)",
            "variant_cpu": "",
            "variant_weight": "100g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01db"),
            "product_id": ObjectId("674138636c0973f433b151b5"),
            "product_name": "Redmi 9A Sport",
            "product_color": "Carbon Black",
            "variant_quantity": 24,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732445345/NodeJS_FinalProject/products/phones/kguc79mpgzhl8j569bju.jpg",
            "retail_price": 130,
            "variant_ROM": "32 GB",
            "variant_RAM": "3 GB",
            "variant_operation_system": "Android 10",
            "variant_chipset": "MediaTek Helio G25",
            "variant_graphic_card": "IMG PowerVR GE8320",
            "variant_screen": "6.53-inch IPS LCD HD+ (720 x 1600 Pixels)",
            "variant_cpu": "",
            "variant_weight": "100g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01dc"),
            "product_id": ObjectId("674138636c0973f433b151b6"),
            "product_name": "Realme Narzo 50i Prime",
            "product_color": "Dark Blue",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732524684/NodeJS_FinalProject/products/phones/so44oeuqglzyawqqxiru.jpg",
            "retail_price": 130,
            "variant_ROM": "32 GB",
            "variant_RAM": "4 GB",
            "variant_operation_system": "Android 10",
            "variant_chipset": "Unisoc T612",
            "variant_graphic_card": "",
            "variant_screen": "6.53-inch HD+ (720 x 1600 Pixels)",
            "variant_cpu": "Octa-core Processor",
            "variant_weight": "100g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01dd"),
            "product_id": ObjectId("674138636c0973f433b151b6"),
            "product_name": "Realme Narzo 50i Prime",
            "product_color": "Mint Green",
            "variant_quantity": 24,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732524825/NodeJS_FinalProject/products/phones/vp465r8y88mj2jdtbuml.jpg",
            "retail_price": 130,
            "variant_ROM": "32 GB",
            "variant_RAM": "4 GB",
            "variant_operation_system": "Android 10",
            "variant_chipset": "Unisoc T612",
            "variant_graphic_card": "",
            "variant_screen": "6.53-inch HD+ (720 x 1600 Pixels)",
            "variant_cpu": "Octa-core Processor",
            "variant_weight": "100g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01de"),
            "product_id": ObjectId("674138636c0973f433b151b7"),
            "product_name": "iQOO Neo 7 5G",
            "product_color": "Frost Blue",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732525633/NodeJS_FinalProject/products/phones/bknm5jg8fp125hhjclmf.jpg",
            "retail_price": 130,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 12, Origin OS Ocean",
            "variant_chipset": "MediaTek Dimensity 9000+ (4 nm)",
            "variant_graphic_card": "",
            "variant_screen": "6.78-inch AMOLED E5 HD+ (1080 x 2400 pixels)",
            "variant_cpu": "",
            "variant_weight": "108g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01df"),
            "product_id": ObjectId("674138636c0973f433b151b7"),
            "product_name": "iQOO Neo 7 5G",
            "product_color": "Interstellar Black",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732525760/NodeJS_FinalProject/products/phones/e7u6xbsgcqnnyryll7zq.jpg",
            "retail_price": 130,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 12, Origin OS Ocean",
            "variant_chipset": "MediaTek Dimensity 9000+ (4 nm)",
            "variant_graphic_card": "",
            "variant_screen": "6.78-inch AMOLED E5 HD+ (1080 x 2400 pixels)",
            "variant_cpu": "",
            "variant_weight": "108g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01e0"),
            "product_id": ObjectId("674138636c0973f433b151b8"),
            "product_name": "OnePlus 10R 5G",
            "product_color": "Forest Green",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546145/NodeJS_FinalProject/products/phones/bkmqti7hgcx0qmmqyyfc.jpg",
            "retail_price": 370,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 12",
            "variant_chipset": "Dimensity 8100 Max",
            "variant_graphic_card": "",
            "variant_screen": "6.7-inch FULL HD+ (1080 x 2400 pixels)",
            "variant_cpu": "",
            "variant_weight": "108g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01e1"),
            "product_id": ObjectId("674138636c0973f433b151b8"),
            "product_name": "OnePlus 10R 5G",
            "product_color": "Sierra Black",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732549939/NodeJS_FinalProject/products/phones/pyqaafaba9ong8bnkyc7.jpg",
            "retail_price": 370,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 12",
            "variant_chipset": "Dimensity 8100 Max",
            "variant_graphic_card": "",
            "variant_screen": "6.7-inch FULL HD+ (1080 x 2400 pixels)",
            "variant_cpu": "",
            "variant_weight": "108g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01e2"),
            "product_id": ObjectId("674138636c0973f433b151b9"),
            "product_name": "iQOO Z6 5G by vivo",
            "product_color": "Chromatic Blue",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546277/NodeJS_FinalProject/products/phones/ajytbsypczqqjhxvef8v.jpg",
            "retail_price": 180,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 12",
            "variant_chipset": "Dimensity 8100 Max",
            "variant_graphic_card": "",
            "variant_screen": "6.7-inch FULL HD+ (1080 x 2400 pixels)",
            "variant_cpu": "",
            "variant_weight": "108g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01e3"),
            "product_id": ObjectId("674138636c0973f433b151ba"),
            "product_name": "Samsung Galaxy S20 FE 5G",
            "product_color": "Cloud Navy",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546513/NodeJS_FinalProject/products/phones/ufwz7gqbt6nxv7xbyygt.jpg",
            "retail_price": 625,
            "variant_ROM": "256 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 10",
            "variant_chipset": "Snapdragon 865",
            "variant_graphic_card": "Adreno 650",
            "variant_screen": "6.7-inch FULL HD+ (1080 x 2400 pixels)",
            "variant_cpu": "",
            "variant_weight": "108g"
        },
    //
        {
            _id: ObjectId("6745d433a409da88028f01e4"),
            product_id: ObjectId("674138636c0973f433b151ba"),
            product_name: "Samsung Galaxy S20 FE 5G",
            product_color: "Cloud Mint",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732615257/NodeJS_FinalProject/products/phones/nvu06lrghvzjlox5ei1c.jpg",
            retail_price: 625,
            variant_ROM: "256 GB",
            variant_RAM: "8 GB",
            variant_operation_system: "Android 10",
            variant_chipset: "Snapdragon 865",
            variant_graphic_card: "Adreno 650",
            variant_screen: "6.7-inch FULL HD+ (1080 x 2400 pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01e5"),
            product_id: ObjectId("674138636c0973f433b151bb"),
            product_name: "Samsung Galaxy M53 5G",
            product_color: "Deep Ocean Blue",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546584/NodeJS_FinalProject/products/phones/qn7b9w3884rd5bqfpmm4.jpg",
            retail_price: 491,
            variant_ROM: "256 GB",
            variant_RAM: "8 GB",
            variant_operation_system: "Android 10",
            variant_chipset: "MediaTek Dimensity 900 5G",
            variant_graphic_card: "Mali-G68",
            variant_screen: "6.7-inch FULL HD+ (1080 x 2400 pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01e6"),
            product_id: ObjectId("674138636c0973f433b151bb"),
            product_name: "Samsung Galaxy M53 5G",
            product_color: "Mystique Green",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732615512/NodeJS_FinalProject/products/phones/xhgxwwfebmpshlcvzphu.jpg",
            retail_price: 491,
            variant_ROM: "256 GB",
            variant_RAM: "8 GB",
            variant_operation_system: "Android 10",
            variant_chipset: "MediaTek Dimensity 900 5G",
            variant_graphic_card: "Mali-G68",
            variant_screen: "6.7-inch FULL HD+ (1080 x 2400 pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01e7"),
            product_id: ObjectId("674138636c0973f433b151bb"),
            product_name: "Samsung Galaxy M53 5G",
            product_color: "Emerald Brown",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732615572/NodeJS_FinalProject/products/phones/g6jmwil8ejeeuoiipgij.jpg",
            retail_price: 491,
            variant_ROM: "256 GB",
            variant_RAM: "8 GB",
            variant_operation_system: "Android 10",
            variant_chipset: "MediaTek Dimensity 900 5G",
            variant_graphic_card: "Mali-G68",
            variant_screen: "6.7-inch FULL HD+ (1080 x 2400 pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01e8"),
            product_id: ObjectId("674138636c0973f433b151bc"),
            product_name: "Samsung Galaxy M32 Prime Edition",
            product_color: "Light Blue",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546717/NodeJS_FinalProject/products/phones/g0rui0rquun9rvs7x2pq.jpg",
            retail_price: 185,
            variant_ROM: "128 GB",
            variant_RAM: "6 GB",
            variant_operation_system: "Android 11, OneU 3.1",
            variant_chipset: "MediaTek | Helio G80 Octa Core Processor 2GHz,1.8GHz",
            variant_graphic_card: "Mali-G68",
            variant_screen: "6.4-inch FHD+ Super AMOLED (1080 x 2400 pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01e9"),
            product_id: ObjectId("674138636c0973f433b151bc"),
            product_name: "Samsung Galaxy M32 Prime Edition",
            product_color: "Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732615990/NodeJS_FinalProject/products/phones/lszqxektq7lnpb5diklw.jpg",
            retail_price: 185,
            variant_ROM: "128 GB",
            variant_RAM: "6 GB",
            variant_operation_system: "Android 11, OneU 3.1",
            variant_chipset: "MediaTek | Helio G80 Octa Core Processor 2GHz,1.8GHz",
            variant_graphic_card: "Mali-G68",
            variant_screen: "6.4-inch FHD+ Super AMOLED (1080 x 2400 pixels)",
            variant_cpu: "",
            variant_weight: "108g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01ea"),
            product_id: ObjectId("674138636c0973f433b151bd"),
            product_name: "Samsung Galaxy S21 FE 5G",
            product_color: "Graphite",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546815/NodeJS_FinalProject/products/phones/qp0kysmqcoynhbo2ixek.jpg",
            retail_price: 452,
            variant_ROM: "128 GB",
            variant_RAM: "8 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "Exynos 2100",
            variant_graphic_card: "Mali-G78 MP14",
            variant_screen: "6.4-inch Full HD+ (1080 x 2340 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01eb"),
            product_id: ObjectId("674138636c0973f433b151bd"),
            product_name: "Samsung Galaxy S21 FE 5G",
            product_color: "Olive",
            variant_quantity: 24,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732616373/NodeJS_FinalProject/products/phones/e9woxfu9dpyafbm6b4yj.jpg",
            retail_price: 452,
            variant_ROM: "128 GB",
            variant_RAM: "8 GB",
            variant_operation_system: "Android 12",
            variant_chipset: "Exynos 2100",
            variant_graphic_card: "Mali-G78 MP14",
            variant_screen: "6.4-inch Full HD+ (1080 x 2340 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01ec"),
            product_id: ObjectId("674138636c0973f433b151be"),
            product_name: "Samsung Galaxy A14 5G",
            product_color: "Dark Red",
            variant_quantity: 24,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732546896/NodeJS_FinalProject/products/phones/x6hxb7ac3feqvomtb3h6.jpg",
            retail_price: 176,
            variant_ROM: "128 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 13",
            variant_chipset: "MediaTek Dimensity 700",
            variant_graphic_card: "Mali-G57 MC2",
            variant_screen: "6.6-inch Full HD+ (1080 x 2408 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
        {
            _id: ObjectId("6745d433a409da88028f01ed"),
            product_id: ObjectId("674138636c0973f433b151be"),
            product_name: "Samsung Galaxy A14 5G",
            product_color: "Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732616554/NodeJS_FinalProject/products/phones/wcgw24tyoghm6aggtjar.jpg",
            retail_price: 176,
            variant_ROM: "128 GB",
            variant_RAM: "4 GB",
            variant_operation_system: "Android 13",
            variant_chipset: "MediaTek Dimensity 700",
            variant_graphic_card: "Mali-G57 MC2",
            variant_screen: "6.6-inch Full HD+ (1080 x 2408 Pixels)",
            variant_cpu: "",
            variant_weight: "100g"
        },
    //
        {
            "_id": ObjectId("6745d433a409da88028f01ee"),
            "product_id": ObjectId("674138636c0973f433b151be"),
            "product_name": "Samsung Galaxy A14 5G",
            "product_color": "Light Green",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732616628/NodeJS_FinalProject/products/phones/qrm00bt9uev90nrljdpl.jpg",
            "retail_price": 176,
            "variant_ROM": "128 GB",
            "variant_RAM": "4 GB",
            "variant_operation_system": "Android 13",
            "variant_chipset": "MediaTek Dimensity 700",
            "variant_graphic_card": "Mali-G57 MC2",
            "variant_screen": "6.6-inch Full HD+ (1080 x 2408 Pixels)",
            "variant_cpu": "",
            "variant_weight": "100g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01ef"),
            "product_id": ObjectId("674138636c0973f433b151bf"),
            "product_name": "Samsung Galaxy S23 Ultra 5G",
            "product_color": "Green",
            "variant_quantity": 22,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547001/NodeJS_FinalProject/products/phones/tpomodemfzf6nqysp809.jpg",
            "retail_price": 642,
            "variant_ROM": "256 GB",
            "variant_RAM": "12 GB",
            "variant_operation_system": "Android 13",
            "variant_chipset": "Snapdragon 8 Gen 2 for Galaxy",
            "variant_graphic_card": "Adreno 740",
            "variant_screen": "6.8-inch 2K+ (1440 x 3088 Pixels)",
            "variant_cpu": "",
            "variant_weight": "125g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01f0"),
            "product_id": ObjectId("674138636c0973f433b151bf"),
            "product_name": "Samsung Galaxy S23 Ultra 5G",
            "product_color": "Phantom Black",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732616840/NodeJS_FinalProject/products/phones/pcaqw9vyq2l9xz7xtjsf.jpg",
            "retail_price": 642,
            "variant_ROM": "256 GB",
            "variant_RAM": "12 GB",
            "variant_operation_system": "Android 13",
            "variant_chipset": "Snapdragon 8 Gen 2 for Galaxy",
            "variant_graphic_card": "Adreno 740",
            "variant_screen": "6.8-inch 2K+ (1440 x 3088 Pixels)",
            "variant_cpu": "",
            "variant_weight": "125g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01f1"),
            "product_id": ObjectId("674138636c0973f433b151bf"),
            "product_name": "Samsung Galaxy S23 Ultra 5G",
            "product_color": "Cream",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732616909/NodeJS_FinalProject/products/phones/cvgmvkurva7ugwvwifh0.jpg",
            "retail_price": 642,
            "variant_ROM": "256 GB",
            "variant_RAM": "12 GB",
            "variant_operation_system": "Android 13",
            "variant_chipset": "Snapdragon 8 Gen 2 for Galaxy",
            "variant_graphic_card": "Adreno 740",
            "variant_screen": "6.8-inch 2K+ (1440 x 3088 Pixels)",
            "variant_cpu": "",
            "variant_weight": "125g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01f2"),
            "product_id": ObjectId("674138636c0973f433b151c0"),
            "product_name": "Samsung Galaxy S23 5G",
            "product_color": "Green",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547210/NodeJS_FinalProject/products/phones/h6slmin6284dwcqsoxlx.jpg",
            "retail_price": 519,
            "variant_ROM": "256 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 13",
            "variant_chipset": "Snapdragon 8 Gen 2 for Galaxy",
            "variant_graphic_card": "Adreno 740",
            "variant_screen": "6.1-inch Full HD+ (1080 x 2340 Pixels)",
            "variant_cpu": "",
            "variant_weight": "125g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01f3"),
            "product_id": ObjectId("674138636c0973f433b151c0"),
            "product_name": "Samsung Galaxy S23 5G",
            "product_color": "Cream",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732617109/NodeJS_FinalProject/products/phones/wh2r69bqj6zfvi4zqwio.jpg",
            "retail_price": 519,
            "variant_ROM": "256 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 13",
            "variant_chipset": "Snapdragon 8 Gen 2 for Galaxy",
            "variant_graphic_card": "Adreno 740",
            "variant_screen": "6.1-inch Full HD+ (1080 x 2340 Pixels)",
            "variant_cpu": "",
            "variant_weight": "125g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01f4"),
            "product_id": ObjectId("674138636c0973f433b151c0"),
            "product_name": "Samsung Galaxy S23 5G",
            "product_color": "Phantom Black",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732617155/NodeJS_FinalProject/products/phones/xionaw6gefptts9xkv69.jpg",
            "retail_price": 519,
            "variant_ROM": "256 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 13",
            "variant_chipset": "Snapdragon 8 Gen 2 for Galaxy",
            "variant_graphic_card": "Adreno 740",
            "variant_screen": "6.1-inch Full HD+ (1080 x 2340 Pixels)",
            "variant_cpu": "",
            "variant_weight": "125g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01f5"),
            "product_id": ObjectId("674138636c0973f433b151c1"),
            "product_name": "Samsung Galaxy S22 5G",
            "product_color": "Green",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547290/NodeJS_FinalProject/products/phones/ubujjvo3ijej8acbkogw.jpg",
            "retail_price": 400,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 12",
            "variant_chipset": "Snapdragon 8 Gen 1",
            "variant_graphic_card": "Adreno 730",
            "variant_screen": "6.1-inch Full HD+ (1080 x 2340 Pixels)",
            "variant_cpu": "",
            "variant_weight": "120g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01f6"),
            "product_id": ObjectId("674138636c0973f433b151c1"),
            "product_name": "Samsung Galaxy S22 5G",
            "product_color": "Phantom White",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732617685/NodeJS_FinalProject/products/phones/m1gldynnzftdtfp93sgd.jpg",
            "retail_price": 400,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 12",
            "variant_chipset": "Snapdragon 8 Gen 1",
            "variant_graphic_card": "Adreno 730",
            "variant_screen": "6.1-inch Full HD+ (1080 x 2340 Pixels)",
            "variant_cpu": "",
            "variant_weight": "120g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01f7"),
            "product_id": ObjectId("674138636c0973f433b151c1"),
            "product_name": "Samsung Galaxy S22 5G",
            "product_color": "Phantom Black",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732617730/NodeJS_FinalProject/products/phones/wgtv8jopz9loiplhvb5q.jpg",
            "retail_price": 400,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB",
            "variant_operation_system": "Android 12",
            "variant_chipset": "Snapdragon 8 Gen 1",
            "variant_graphic_card": "Adreno 730",
            "variant_screen": "6.1-inch Full HD+ (1080 x 2340 Pixels)",
            "variant_cpu": "",
            "variant_weight": "120g"
        },
    //
        {
            "_id": ObjectId("6745d433a409da88028f01f8"),
            "product_id": ObjectId("674138636c0973f433b151c2"),
            "product_name": "Samsung Galaxy A23 5G",
            "product_color": "Light Blue",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547371/NodeJS_FinalProject/products/phones/awp5ur3cpkkv6nik9euu.jpg",
            "retail_price": 163,
            "variant_ROM": "128 GB",
            "variant_RAM": "4 GB",
            "variant_operation_system": "Android 12",
            "variant_chipset": "Snapdragon 695 5G",
            "variant_graphic_card": "Adreno 619",
            "variant_screen": "6.6-inch Full HD+ (1080 x 2408 Pixels)",
            "variant_cpu": "",
            "variant_weight": "125g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01f9"),
            "product_id": ObjectId("674138636c0973f433b151c2"),
            "product_name": "Samsung Galaxy A23 5G",
            "product_color": "Silver",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732618198/NodeJS_FinalProject/products/phones/dz6e84r13pgppaytuidw.jpg",
            "retail_price": 163,
            "variant_ROM": "128 GB",
            "variant_RAM": "4 GB",
            "variant_operation_system": "Android 12",
            "variant_chipset": "Snapdragon 695 5G",
            "variant_graphic_card": "Adreno 619",
            "variant_screen": "6.6-inch Full HD+ (1080 x 2408 Pixels)",
            "variant_cpu": "",
            "variant_weight": "125g"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01fa"),
            "product_id": ObjectId("674138636c0973f433b151c3"),
            "product_name": "DELL Latitude 5490 Core i5 7th Gen Laptop",
            "product_color": "Black",
            "variant_quantity": 23,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547455/NodeJS_FinalProject/products/phones/q0b7prsft9vihgx9fkdw.jpg",
            "retail_price": 310,
            "variant_ROM": "256 GB",
            "variant_RAM": "8 GB RAM DDR4 2400MHz",
            "variant_operation_system": "Window 11",
            "variant_chipset": "Intel Core™ i5 7300u 2.6 GHz upto 3.5 GHz, 3 MB Intel® Smart Cache",
            "variant_graphic_card": "Intel® UHD Graphics 620",
            "variant_screen": "14.0 inch Anti-Glare LED Backlit Display 1366x768 HD",
            "variant_cpu": "Intel Core™ i5 7300u 2.6 GHz upto 3.5 GHz, 3 MB Intel® Smart Cache",
            "variant_weight": "1.5kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01fb"),
            "product_id": ObjectId("674138636c0973f433b151c4"),
            "product_name": "HP Chromebook C640 10th Gen Intel Core i5 Thin & Light FHD Laptop",
            "product_color": "Silver",
            "variant_quantity": 24,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547538/NodeJS_FinalProject/products/phones/ndji8gipx3gfj1jsfd3p.jpg",
            "retail_price": 610,
            "variant_ROM": "64GB M.2 PCIe NVMe SSD",
            "variant_RAM": "8 GB RAM DDR4 2400MHz",
            "variant_operation_system": "Window 11",
            "variant_chipset": "Intel Core i5 (10th Gen) i5-10310U Quad-core (4 Core) 1.70 GHz",
            "variant_graphic_card": "Intel UHD Graphics",
            "variant_screen": "14-inch FHD (1920 x 1080) Touch-Screen",
            "variant_cpu": "Intel Core i5 (10th Gen) i5-10310U Quad-core (4 Core) 1.70 GHz",
            "variant_weight": "1.5kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01fc"),
            "product_id": ObjectId("674138636c0973f433b151c5"),
            "product_name": "Lenovo ThinkPad X260 High Performance 12.5 inch IPS Panel 1.5kg Laptop",
            "product_color": "Black",
            "variant_quantity": 24,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547611/NodeJS_FinalProject/products/phones/npnhzszjcszlohshkotd.jpg",
            "retail_price": 562,
            "variant_ROM": "256 GB",
            "variant_RAM": "8 GB RAM DDR4 (Onboard)",
            "variant_operation_system": "Windows 10 Pro",
            "variant_chipset": "Intel Core i5 (6th Gen) i5-6500U Quad-core (4 Core) 1.70 GHz",
            "variant_graphic_card": "Intel UHD Graphics",
            "variant_screen": "12.5-inch Full HD (1920 x 1080)",
            "variant_cpu": "Intel Core i5 (6th Gen) i5-6500U Quad-core (4 Core) 1.70 GHz",
            "variant_weight": "3.1kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01fd"),
            "product_id": ObjectId("674138636c0973f433b151c6"),
            "product_name": "Lenovo ThinkPad T450 Intel Core i5-5300U 14 inches Business Laptop Computer",
            "product_color": "Black",
            "variant_quantity": 22,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547703/NodeJS_FinalProject/products/phones/bkow5o9cw7wrnuoastfs.jpg",
            "retail_price": 193,
            "variant_ROM": "128 GB",
            "variant_RAM": "8 GB RAM DDR4 (Onboard)",
            "variant_operation_system": "Windows 10 Pro",
            "variant_chipset": "Intel® Core™ i5-5300U Processor (3M Cache, up to 2.90 GHz)",
            "variant_graphic_card": "Intel UHD Graphics",
            "variant_screen": "14.0 Anti-Glare LED-backlit (1366x768)",
            "variant_cpu": "Intel® Core™ i5-5300U Processor (3M Cache, up to 2.90 GHz)",
            "variant_weight": "3.1kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01fe"),
            "product_id": ObjectId("674138636c0973f433b151c7"),
            "product_name": "HP Victus Gaming Latest FHD Gaming Laptop",
            "product_color": "Black",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732547808/NodeJS_FinalProject/products/phones/xzdij9cija2oycweree7.jpg",
            "retail_price": 750,
            "variant_ROM": "512 GB SSD NVMe PCIe",
            "variant_RAM": "16 GB RAM DDR5",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "AMD Ryzen 5 - 7535HS Turbo Boost 4.55 GHz",
            "variant_graphic_card": "NVIDIA GeForce RTX 2050, 4 GB",
            "variant_screen": "15.6 Full HD (1920 x 1080)",
            "variant_cpu": "AMD Ryzen 5 - 7535HS Turbo Boost 4.55 GHz",
            "variant_weight": "3.1kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f01ff"),
            "product_id": ObjectId("674138636c0973f433b151c9"),
            "product_name": "Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen",
            "product_color": "Black",
            "variant_quantity": 24,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548020/NodeJS_FinalProject/products/phones/lg5qi5ymyiywplyfulw2.jpg",
            "retail_price": 649,
            "variant_ROM": "512 GB SSD NVMe PCIe",
            "variant_RAM": "16 GB RAM DDR4",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "Intel Core i5 Raptor Lake - 13420H",
            "variant_graphic_card": "NVIDIA GeForce RTX 2050, 4 GB",
            "variant_screen": "15.6 Full HD (1920 x 1080)",
            "variant_cpu": "Intel Core i5 Raptor Lake - 13420H",
            "variant_weight": "3.1kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f0200"),
            "product_id": ObjectId("674138636c0973f433b151ca"),
            "product_name": "HP Pavilion 14 FHD Gaming Laptop",
            "product_color": "Silver",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548219/NodeJS_FinalProject/products/phones/s3ugiqjifsfold2jwbzl.jpg",
            "retail_price": 590,
            "variant_ROM": "256GB SSD PCIe® NVMe™ M.2",
            "variant_RAM": "16 GB RAM DDR4",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "Core i5 1135G7 (upto 4.20 GHz - 8Mb)",
            "variant_graphic_card": "Intel® Iris® Xe Graphics",
            "variant_screen": "14 Full HD (1920 x 1080)",
            "variant_cpu": "Core i5 1135G7 (upto 4.20 GHz - 8Mb)",
            "variant_weight": "3.1kg"
        },
        {
            "_id": ObjectId("6745d433a409da88028f0201"),
            "product_id": ObjectId("674138636c0973f433b151cb"),
            "product_name": "ASUS TUF Gaming A15 Laptop",
            "product_color": "Black",
            "variant_quantity": 25,
            "product_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548326/NodeJS_FinalProject/products/phones/loaaw8hobifhihubgiwq.jpg",
            "retail_price": 688,
            "variant_ROM": "512GB PCIe 4.0 NVMe M.2 SSD",
            "variant_RAM": "16 GB RAM DDR5-5600 SO-DIMM",
            "variant_operation_system": "Windows 11",
            "variant_chipset": "AMD Ryzen 5 7535HS (3.3GHz, 19MB Cache, up to 4.55 GHz",
            "variant_graphic_card": "NVIDIA GeForce RTX 3050 4GB GDDR6 AMD Radeon Graphics",
            "variant_screen": "15.6 1920 x 1080 pixels (FullHD)",
            "variant_cpu": "AMD Ryzen 5 7535HS (3.3GHz, 19MB Cache, up to 4.55 GHz",
            "variant_weight": "3.1kg"
        },
    //
        {
            _id: ObjectId("6745d433a409da88028f0202"),
            product_id: ObjectId("674138636c0973f433b151cc"),
            product_name: "Lenovo Ideapad Gaming 3",
            product_color: "Black",
            variant_quantity: 25,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548414/NodeJS_FinalProject/products/phones/righyjleqb7fvtfvlb6l.jpg",
            retail_price: 876,
            variant_ROM: "512GB SSD M.2 2242 PCIe 4.0x4 NVMe",
            variant_RAM: "8 GB RAM SO-DIMM DDR4-3200",
            variant_operation_system: "Windows 11",
            variant_chipset: "AMD Ryzen 5 5500H",
            variant_graphic_card: "NVIDIA GeForce RTX 2050 4GB GDDR6",
            variant_screen: "15.6 1920 x 1080 pixels (FullHD)",
            variant_cpu: "AMD Ryzen 5 5500H",
            variant_weight: "2.5kg",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            _id: ObjectId("6745d433a409da88028f0203"),
            product_id: ObjectId("674138636c0973f433b151cd"),
            product_name: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds",
            product_color: "Black",
            variant_quantity: 125,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548529/NodeJS_FinalProject/products/phones/pllyenszfiuewbjd5azl.jpg",
            retail_price: 45,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "500g",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            _id: ObjectId("6745d433a409da88028f0204"),
            product_id: ObjectId("674138636c0973f433b151ce"),
            product_name: "JBL C100SI Wired In Ear Headphones",
            product_color: "Black",
            variant_quantity: 124,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548661/NodeJS_FinalProject/products/phones/metf3trfn55oqzulc388.jpg",
            retail_price: 45,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "500g",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            _id: ObjectId("6745d433a409da88028f0205"),
            product_id: ObjectId("674138636c0973f433b151cf"),
            product_name: "realme TechLife Buds T100 Bluetooth Truly Wireless in Ear Earbuds",
            product_color: "Black yellow",
            variant_quantity: 124,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548723/NodeJS_FinalProject/products/phones/v328hxi5okpfjb1y4fpc.jpg",
            retail_price: 29,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "500g",
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            _id: ObjectId("6745d433a409da88028f0206"),
            product_id: ObjectId("674138636c0973f433b151d0"),
            product_name: "Noise Buds VS104 in-Ear Truly Wireless Earbuds",
            product_color: "Black yellow",
            variant_quantity: 125,
            product_image: "https://res.cloudinary.com/dervs0fx5/image/upload/v1732548788/NodeJS_FinalProject/products/phones/xszx2yewb1lsftwvtcz7.jpg",
            retail_price: 36,
            variant_ROM: "",
            variant_RAM: "",
            variant_operation_system: "",
            variant_chipset: "",
            variant_graphic_card: "",
            variant_screen: "",
            variant_cpu: "",
            variant_weight: "500g",
            created_at: new Date(),
            updated_at: new Date()
        },
    ]
)

// rating
db.createCollection('rating');
db.rating.insertMany(
    [
        {
            _id: ObjectId("6745a54598c37682a859650a"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            deleted: false,
            createdAt: new Date("2024-11-26T10:39:01.149Z"),
            updatedAt: new Date("2024-11-26T10:39:01.149Z"),
            __v: 0,
            star: 4
        },
        {
            _id: ObjectId("6745a876a24c46141ed3bb0d"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 4,
            deleted: false,
            createdAt: new Date("2024-11-26T10:52:38.282Z"),
            updatedAt: new Date("2024-11-26T10:52:38.282Z"),
            __v: 0
        },
        {
            _id: ObjectId("6745a8e1e76633d70457c8f3"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 2,
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:25.661Z"),
            updatedAt: new Date("2024-11-26T10:54:25.661Z"),
            __v: 0
        },
        {
            _id: ObjectId("6745a8ede76633d70457c8f5"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 2,
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:37.791Z"),
            updatedAt: new Date("2024-11-26T10:54:37.791Z"),
            __v: 0
        },
        {
            _id: ObjectId("6745a8f0e76633d70457c8f7"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 2,
            deleted: false,
            createdAt: new Date("2024-11-26T10:54:40.680Z"),
            updatedAt: new Date("2024-11-26T10:54:40.680Z"),
            __v: 0
        },
        {
            _id: ObjectId("6745aa6de76633d70457c911"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 5,
            deleted: false,
            createdAt: new Date("2024-11-26T11:01:01.836Z"),
            updatedAt: new Date("2024-11-26T11:01:01.836Z"),
            __v: 0
        },
        {
            _id: ObjectId("674686fd4975aec49b3cc9da"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            star: 4,
            deleted: false,
            createdAt: new Date("2024-11-27T02:42:05.395Z"),
            updatedAt: new Date("2024-11-27T02:42:05.395Z"),
            __v: 0
        },
        {
            _id: ObjectId("67468ab54975aec49b3cca42"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-11-27T02:57:57.989Z"),
            updatedAt: new Date("2024-11-27T02:57:57.989Z"),
            __v: 0
        },
        {
            _id: ObjectId("675482d394940a4b7fd0ec9b"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-12-07T17:16:03.836Z"),
            updatedAt: new Date("2024-12-07T17:16:03.836Z"),
            __v: 0
        },
        {
            _id: ObjectId("6754832394940a4b7fd0ecb0"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 5,
            deleted: false,
            createdAt: new Date("2024-12-07T17:17:23.644Z"),
            updatedAt: new Date("2024-12-07T17:17:23.644Z"),
            __v: 0
        },
        {
            _id: ObjectId("6754838c0e58b2db0ac6febe"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 0,
            deleted: false,
            createdAt: new Date("2024-12-07T17:19:08.143Z"),
            updatedAt: new Date("2024-12-07T17:19:08.143Z"),
            __v: 0
        },
        {
            _id: ObjectId("675483c763f6d3f15fd94af7"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-12-07T17:20:07.537Z"),
            updatedAt: new Date("2024-12-07T17:20:07.537Z"),
            __v: 0
        },
        {
            _id: ObjectId("675483cd63f6d3f15fd94b03"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-12-07T17:20:13.776Z"),
            updatedAt: new Date("2024-12-07T17:20:13.776Z"),
            __v: 0
        },
        {
            _id: ObjectId("67548453dd77929dbe88f4bf"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-12-07T17:22:27.110Z"),
            updatedAt: new Date("2024-12-07T17:22:27.110Z"),
            __v: 0
        },
        {
            _id: ObjectId("675484b018defbbb85016e69"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 1,
            deleted: false,
            createdAt: new Date("2024-12-07T17:24:00.521Z"),
            updatedAt: new Date("2024-12-07T17:24:00.521Z"),
            __v: 0
        },
        {
            _id: ObjectId("675488d20d29ad8cbf52b1ab"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 3,
            deleted: false,
            createdAt: new Date("2024-12-07T17:41:38.498Z"),
            updatedAt: new Date("2024-12-07T17:41:38.498Z"),
            __v: 0
        },
        {
            _id: ObjectId("675488e40d29ad8cbf52b1c7"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 5,
            deleted: false,
            createdAt: new Date("2024-12-07T17:41:56.397Z"),
            updatedAt: new Date("2024-12-07T17:41:56.397Z"),
            __v: 0
        },
        {
            _id: ObjectId("675489c805fc1b88d5f2ced7"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            star: 4,
            deleted: false,
            createdAt: new Date("2024-12-07T17:45:44.828Z"),
            updatedAt: new Date("2024-12-07T17:45:44.828Z"),
            __v: 0
        }
    ]
)

// role
db.createCollection('role');
db.role.insertMany(
    [
        {
            _id: ObjectId("673724fc35224c690dbd21c2"),
            role_name: "Admin"
        },
        {
            _id: ObjectId("6737252735224c690dbd21c3"),
            role_name: "Customer"
        }
    ]
)

// user
db.createCollection('user');
db.user.insertMany(
    [
        {
            "_id": ObjectId("674067eac35c263bdad6c769"),
            "fullName": "Nhi Thảoo",
            "email": "ryannguyen1905@gmail.com",
            "gender": "Female",
            "phone": "0147896328",
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1733595019/NodeJS_FinalProject/user/llybuekiax5dktj7lxqu.jpg",
            "deleted": false,
            "birthday": new Date("2024-11-22T00:00:00.000Z"),
            "createdAt": new Date("2024-11-22T11:15:54.284Z"),
            "updatedAt": new Date("2024-12-07T18:10:21.378Z"),
            "__v": 0,
            "point": 93
        },
        {
            "_id": ObjectId("6741a5294ccb29381f082373"),
            "fullName": "Jake Jason",
            "email": "tadat290903@gmail.com",
            "gender": "Male",
            "birthday": new Date("2024-10-28T00:00:00.000Z"),
            "phone": "0356779197",
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1733196676/NodeJS_FinalProject/user/ojtcn4serx1xdppzqrzs.png",
            "deleted": false,
            "createdAt": new Date("2024-11-23T09:49:29.457Z"),
            "updatedAt": new Date("2024-12-03T03:31:16.391Z"),
            "__v": 0,
            "point": 499605
        },
        {
            "_id": ObjectId("6741a61d4ccb29381f082384"),
            "fullName": "Bob Johnson",
            "email": "tiendat79197@gmail.com",
            "gender": "Male",
            "birthday": new Date("2024-10-27T00:00:00.000Z"),
            "phone": "0369852147",
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png",
            "deleted": false,
            "createdAt": new Date("2024-11-23T09:53:33.868Z"),
            "updatedAt": new Date("2024-11-23T09:53:33.868Z"),
            "__v": 0,
            "point": 61
        },
        {
            "_id": ObjectId("674c64f8e5063c9398680583"),
            "fullName": "Jacky Style",
            "email": "jakejohn3004@gmail.com",
            "gender": "Male",
            "phone": "0356779198",
            "point": 136,
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png",
            "deleted": false,
            "birthday": new Date("2024-12-01T13:30:32.343Z"),
            "createdAt": new Date("2024-12-01T13:30:32.343Z"),
            "updatedAt": new Date("2024-12-01T13:30:32.343Z"),
            "__v": 0
        },
        {
            "_id": ObjectId("675691557d962d327ba194ed"),
            "fullName": "Tran Minh Quoc",
            "email": "trannquocphong2k3@gmail.com",
            "gender": "Male",
            "birthday": new Date("2004-11-01T00:00:00.000Z"),
            "phone": "0258963147",
            "point": 0,
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png",
            "deleted": false,
            "createdAt": new Date("2024-12-09T06:42:29.297Z"),
            "updatedAt": new Date("2024-12-09T06:42:29.297Z"),
            "__v": 0
        },
        {
            "_id": ObjectId("675692477d962d327ba194f6"),
            "fullName": "Quoc Minh Tran",
            "email": "quocminhtran24032004@gmail.com",
            "gender": "Male",
            "birthday": new Date("2004-12-06T00:00:00.000Z"),
            "phone": "0369852741",
            "point": 0,
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png",
            "deleted": false,
            "createdAt": new Date("2024-12-09T06:46:31.851Z"),
            "updatedAt": new Date("2024-12-09T06:46:31.851Z"),
            "__v": 0
        },
        {
            "_id": ObjectId("675692847d962d327ba194ff"),
            "fullName": "Tang Thieu Phong",
            "email": "tangthieuphong888@gmail.com",
            "gender": "Male",
            "birthday": new Date("2003-12-27T00:00:00.000Z"),
            "phone": "0147896523",
            "point": 0,
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png",
            "deleted": false,
            "createdAt": new Date("2024-12-09T06:47:32.769Z"),
            "updatedAt": new Date("2024-12-09T06:47:32.769Z"),
            "__v": 0
        },
        {
            "_id": ObjectId("6756c064204903ae7dc1d082"),
            "fullName": "Maria Nguyen",
            "email": "marianguyen@gmail.com",
            "gender": "Female",
            "birthday": new Date("2000-11-14T00:00:00.000Z"),
            "phone": "0258796413",
            "point": 0,
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png",
            "deleted": false,
            "createdAt": new Date("2024-12-09T10:03:16.114Z"),
            "updatedAt": new Date("2024-12-09T10:03:16.114Z"),
            "__v": 0
        },
        {
            "_id": ObjectId("6756c364204903ae7dc1d10e"),
            "fullName": "Speed Nguyen",
            "email": "speednguyen@gmail.com",
            "gender": "Male",
            "birthday": new Date("2000-10-30T00:00:00.000Z"),
            "phone": "0258314697",
            "point": 0,
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png",
            "deleted": false,
            "createdAt": new Date("2024-12-09T10:16:04.991Z"),
            "updatedAt": new Date("2024-12-09T10:16:04.991Z"),
            "__v": 0
        },
        {
            "_id": ObjectId("6756c394204903ae7dc1d117"),
            "fullName": "Marry Dan",
            "email": "marrydan@gmail.com",
            "gender": "Female",
            "birthday": new Date("2002-12-04T00:00:00.000Z"),
            "phone": "0369741582",
            "point": 0,
            "profile_image": "https://res.cloudinary.com/dervs0fx5/image/upload/v1709054146/cl0hmsqdjl1lwnahek0i.png",
            "deleted": false,
            "createdAt": new Date("2024-12-09T10:16:52.969Z"),
            "updatedAt": new Date("2024-12-09T10:16:52.969Z"),
            "__v": 0
        }
    ]
)

// user coupon
db.createCollection('user_coupon');
// db.user_coupon.insertMany([])

// wish list
db.createCollection('wish_list');
db.wish_list.insertMany(
    [
        {
            _id: ObjectId("67470928334ac964f89fa64d"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a5"),
            createdAt: new Date("2024-11-27T11:57:28.389Z"),
            __v: 0
        },
        {
            _id: ObjectId("67473a05248eccbe7ca632d4"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151aa"),
            createdAt: new Date("2024-11-27T15:25:57.735Z"),
            __v: 0
        },
        {
            _id: ObjectId("6748576fb712ba2871157b22"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a8"),
            createdAt: new Date("2024-11-28T11:43:43.394Z"),
            __v: 0
        },
        {
            _id: ObjectId("674a7f4573a24e758943150c"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151ab"),
            createdAt: new Date("2024-11-30T02:58:13.431Z"),
            __v: 0
        },
        {
            _id: ObjectId("67549401941a18f8c5ae172e"),
            user_id: ObjectId("6741a5294ccb29381f082373"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            createdAt: new Date("2024-12-07T18:29:21.024Z"),
            __v: 0
        },
        {
            _id: ObjectId("67569cc7b4a7648736a80dac"),
            user_id: ObjectId("674067eac35c263bdad6c769"),
            product_id: ObjectId("674138636c0973f433b151a9"),
            createdAt: new Date("2024-12-09T07:31:19.486Z"),
            __v: 0
        }
    ]
)
