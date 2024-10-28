import sys
from docx import Document
import os
import re
import json

def clean_text(text):
    # Remove <, >, and / characters
    text = re.sub(r'[<>/]', '', text)
    # Keep only alphanumeric characters, spaces, and basic punctuation
    text = re.sub(r'[^a-zA-Z0-9\s.,!?-]', '', text)
    return text.strip()

def is_title(paragraph):
    return paragraph.style.name.startswith('Heading')

def read_abstract():
    try:
        # Get the absolute path to the abstract.docx file
        current_dir = os.path.dirname(os.path.abspath(__file__))
        docx_path = os.path.join(current_dir, 'tibeb_ethiopia', 'abstract.docx')
        json_path = os.path.join(current_dir, 'tibeb_ethiopia', 'abstract.json')

        # Open the document
        doc = Document(docx_path)

        content = []
        current_section = {"title": "", "paragraphs": []}

        # Read the content of the document and clean it
        for para in doc.paragraphs:
            cleaned_text = clean_text(para.text)
            if not cleaned_text:
                continue

            if is_title(para):
                if current_section["paragraphs"]:
                    content.append(current_section)
                current_section = {"title": cleaned_text, "paragraphs": []}
            else:
                current_section["paragraphs"].append(cleaned_text)

        if current_section["paragraphs"]:
            content.append(current_section)

        # Write the content to a JSON file
        with open(json_path, 'w', encoding='utf-8') as json_file:
            json.dump(content, json_file, ensure_ascii=False, indent=2)

        return f"JSON file created successfully at {json_path}"
    except Exception as e:
        return f"Error processing abstract: {str(e)}"

if __name__ == "__main__":
    print(read_abstract())
