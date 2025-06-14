SUMMARIZE_TEXT_PROMPT = ("I need you to summarize the meal ingredients from the next text with their quantity:\n"
                         "'{text}'\n"
                         "If there are no ingredient names return 'NO INGREDIENTS'\n"
                         "Please send back only the result without any additional information/messages and without notes.\n"
                         "The format of the response should be: 'Name of ingredient' - 'quantity of ingredient'")