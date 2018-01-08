def correct_sentence(text):
    """
        returns a corrected sentence which starts with a capital letter
        and ends with a dot.
    """
    return text.capitalize() + ('' if text.endswith('.') else '.')


print(correct_sentence("greetings, friends") == "Greetings, friends.")
print(correct_sentence("Greetings, friends") == "Greetings, friends.")
print(correct_sentence("Greetings, friends.") == "Greetings, friends.")
print(correct_sentence("hi") == "Hi.")

