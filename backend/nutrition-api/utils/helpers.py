from models.schemas import Ingredient, Meal

class ParseHelper:
    @staticmethod
    def parse_ingredient(item: dict) -> Ingredient:
        return Ingredient.model_validate(item)

    @staticmethod
    def parse_ingredients(nutritionix_data: list[dict]) -> Meal:
        ingredients = [ParseHelper.parse_ingredient(item) for item in nutritionix_data]
        return Meal(ingredients=ingredients)
