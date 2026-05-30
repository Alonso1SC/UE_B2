# Formato de ejercicios – B2 Use of English

Usa los siguientes prompts con cualquier IA (ChatGPT, Claude, Gemini…) para generar ejercicios nuevos. Copia el JSON resultante en la carpeta correspondiente y añade la entrada en el `index.json` del tipo.

---

## UE1 – Opción Múltiple (Multiple Choice Cloze)

**Prompt:**
> Crea un ejercicio de Multiple Choice Cloze al estilo Cambridge B2 sobre el tema "[TEMA]".
> El texto debe tener exactamente 8 huecos marcados como {{1}}, {{2}}, … {{8}}.
> Cada hueco debe tener 4 opciones (A, B, C, D) donde solo una es correcta.
> Devuelve el resultado en este formato JSON exacto:

```json
{
  "id": "exercise3",
  "title": "Ejercicio 3 UE1",
  "type": "multiple_choice",
  "instructions": "For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap.",
  "text": "Texto con {{1}}, {{2}}, … {{8}} indicando los huecos.",
  "questions": [
    {
      "number": 1,
      "options": { "A": "palabra", "B": "palabra", "C": "palabra", "D": "palabra" },
      "answer": "A"
    }
  ]
}
```

---

## UE2 – Rellena los Huecos (Open Cloze)

**Prompt:**
> Crea un ejercicio de Open Cloze al estilo Cambridge B2 sobre el tema "[TEMA]".
> El texto debe tener exactamente 8 huecos marcados como {{1}}, {{2}}, … {{8}}.
> Cada hueco se rellena con UNA sola palabra (artículos, preposiciones, conjunciones, auxiliares…).
> Si hay más de una respuesta válida, ponla como array ["opción1", "opción2"].
> Devuelve el resultado en este formato JSON exacto:

```json
{
  "id": "exercise3",
  "title": "Ejercicio 3 UE2",
  "type": "open_cloze",
  "instructions": "For questions 1–8, read the text below and think of the word which best fits each gap. Use only ONE word in each gap.",
  "text": "Texto con {{1}}, {{2}}, … {{8}} indicando los huecos.",
  "answers": {
    "1": "the",
    "2": ["although", "though"],
    "3": "which"
  }
}
```

---

## UE3 – Formación de Palabras (Word Formation)

**Prompt:**
> Crea un ejercicio de Word Formation al estilo Cambridge B2 sobre el tema "[TEMA]".
> Debe tener exactamente 8 líneas. Cada línea tiene un hueco marcado como {{N}} y una palabra en MAYÚSCULAS al final que el alumno debe transformar para rellenar el hueco.
> Devuelve el resultado en este formato JSON exacto:

```json
{
  "id": "exercise3",
  "title": "Ejercicio 3 UE3",
  "type": "word_formation",
  "instructions": "For questions 1–8, read the text below. Use the word given in CAPITALS to form a word that fits in the gap in the same line.",
  "lines": [
    {
      "number": 1,
      "text": "Frase con el hueco {{1}} en su sitio.",
      "base_word": "DEVELOP",
      "answer": "development"
    }
  ]
}
```

---

## UE4 – Transformación de Frases (Key Word Transformation)

**Prompt:**
> Crea un ejercicio de Key Word Transformation al estilo Cambridge B2.
> Debe tener exactamente 6 pares de frases. Cada par tiene una frase original, una PALABRA CLAVE en mayúsculas, y la segunda frase incompleta dividida en inicio y final.
> El alumno debe rellenar la parte que falta usando entre 2 y 5 palabras incluyendo la palabra clave.
> Si hay más de una respuesta válida, ponla como array.
> Devuelve el resultado en este formato JSON exacto:

```json
{
  "id": "exercise3",
  "title": "Ejercicio 3 UE4",
  "type": "key_word_transformation",
  "instructions": "For questions 1–6, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do NOT change the word given. You must use between TWO and FIVE words, including the word given.",
  "questions": [
    {
      "number": 1,
      "sentence1": "Frase original completa.",
      "key_word": "PALABRA",
      "sentence2_start": "Inicio de la segunda frase",
      "sentence2_end": "final de la segunda frase.",
      "answer": ["respuesta correcta", "variante válida"]
    }
  ]
}
```

---

## Añadir el ejercicio al índice

Después de guardar el fichero `exercise3.json` en la carpeta correspondiente (p.ej. `exercises/UE1/`), añade esta línea al `exercises/UE1/index.json`:

```json
{
  "id": "exercise3",
  "title": "Ejercicio 3 UE1",
  "description": "Tema: El que pongas"
}
```
