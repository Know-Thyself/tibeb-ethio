import os
from docx import Document

def read_docx_files(folder_path):
    # Get all .docx files in the specified folder
    docx_files = [f for f in os.listdir(folder_path) if f.endswith('.docx')]

    for file_name in docx_files:
        file_path = os.path.join(folder_path, file_name)
        print(f"Reading file: {file_name}")

        # Open the document
        doc = Document(file_path)

        # Read and print the content of the document
        full_text = []
        for para in doc.paragraphs:
            full_text.append(para.text)

        print("Content:")
        print("\n".join(full_text))
        print("\n" + "="*50 + "\n")

if __name__ == "__main__":
    folder_path = "tibeb_ethiopia"
    read_docx_files(folder_path)
