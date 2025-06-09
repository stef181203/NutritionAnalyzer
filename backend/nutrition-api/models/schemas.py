from typing import List
from pydantic import BaseModel, Field, computed_field

class TextRequest(BaseModel):
    text: str

class Ingredient(BaseModel):
    name: str = Field(..., alias="food_name")
    serving_qty: float = Field(..., alias="serving_qty")
    serving_unit: str = Field(..., alias="serving_unit")
    fat: float = Field(..., alias="nf_total_fat")
    carbohydrates: float = Field(..., alias="nf_total_carbohydrate")
    protein: float = Field(..., alias="nf_protein")
    calories: float = Field(..., alias="nf_calories")

    class Config:
        allow_population_by_field_name = True

class Meal(BaseModel):
    ingredients: List[Ingredient]

    @computed_field
    @property
    def total_fat(self) -> float:
        return round(sum(i.fat for i in self.ingredients), 2)

    @computed_field
    @property
    def total_carbs(self) -> float:
        return round(sum(i.carbohydrates for i in self.ingredients), 2)

    @computed_field
    @property
    def total_protein(self) -> float:
        return round(sum(i.protein for i in self.ingredients), 2)

    @computed_field
    @property
    def total_calories(self) -> float:
        return round(sum(i.calories for i in self.ingredients), 2)