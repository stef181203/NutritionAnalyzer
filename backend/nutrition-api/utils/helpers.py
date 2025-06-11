from models.schemas import Ingredient, Meal
import re

class InputHelper:
    @staticmethod
    def parse_ingredient(item: dict) -> Ingredient:
        return Ingredient.model_validate(item)

    @staticmethod
    def parse_ingredients(nutritionix_data: list[dict]) -> Meal:
        ingredients = [InputHelper.parse_ingredient(item) for item in nutritionix_data]
        return Meal(ingredients=ingredients)

    @staticmethod
    def is_valid_ingredient_input(text: str) -> bool:
        if len(text.strip()) < 5:
            return False

        measurement_keywords = ["gram", "g", "ml", "cup", "tablespoon", "teaspoon", "kg", "oz", "lb", "liter"]
        has_number = bool(re.search(r'\d', text))
        has_keyword = any(word in text.lower() for word in measurement_keywords)

        return has_number or has_keyword
