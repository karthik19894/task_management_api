import { Category } from "../models/Category";

class CategoryService {
    static getCategoriesbyUserId(userId: string) {
        return Category.find({ userId });
    }

    static create(name: string, userId: string) {
        const category = new Category({ name, userId });
        return category.save();
    }

    static delete(id: string) {
        return Category.findByIdAndDelete(id);
    }
}

export default CategoryService;
