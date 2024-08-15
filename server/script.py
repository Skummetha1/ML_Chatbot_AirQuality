import spacy

# Load the trained NER model
nlp_ner = spacy.load("air_quality_ner_model")

def test_model(text):
    doc = nlp_ner(text)
    for ent in doc.ents:
        print(f"Entity: {ent.text}, Label: {ent.label_}")

if __name__ == "__main__":
    text = "What is the current air quality index for Los Angeles?"
    test_model(text)