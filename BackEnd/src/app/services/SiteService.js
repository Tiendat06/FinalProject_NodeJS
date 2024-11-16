
class SiteService {
    index = () => {
        return [
            {"id": 1, "name": "Jake", "age": 25},
            {"id": 2, "name": "John", "age": 41},
            {"id": 3, "name": "Doe", "age": 23},
        ];
    }
}

module.exports = new SiteService;