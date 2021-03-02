---
models:
  forios:
    - ["uuid", "UUID", "Primary Key"]
    - ["owner_uuid", "UUID", "Foreign key to the owner (users)"]
    - ["content_type", "VARCHAR", ""]
    - ["title", "TEXT", ""]
    - ["public", "VARCHAR", "Whether the forio is public, protected or private"]
    - ["created", "TIMESTAMP", ""]
    - ["updated", "TIMESTAMP", ""]

  forios_contents:
    - ["uuid", "UUID", "Primary Key, Foreign Key to the forio (forios)"]
    - ["contents", "TEXT", "Specific content. Can be just the text or the URL of an image, etc"]

  forios_links:
    - ["uuid", "UUID", "Primary Key"]
    - ["origin", "UUID", "Foreign Key to the origin forio (forios)"]
    - ["destination", "UUID", "Foreign Key to the destination forio (forios)"]
    - ["public", "VARCHAR", "Whether the link is public, protected or private"]
    - ["description", "TEXT", "Description of the link"]

  forios_graphs:
    - ["uuid", "UUID", "Primary Key"]
    - ["title", "VARCHAR", ""]
    - ["description", "TEXT", ""]

---
# Models & Database


## Forio
<Model
  modelTable="forios"
  :modelSchema="$frontmatter.models.forios">

  A **Forio** is the basic unit of content in **Foria**.
  For a generic overview, visit the [philosophy/forio](/philosophy/forio) page.

</Model>

## ForioContent
<Model
  modelTable="forios_contents"
  :modelSchema="$frontmatter.models.forios_contents">

  The `forios` table is associated with the `forios_contents` table. The contents of a forio are stored in a sepatate table to avoid chunking a big column to the most queried table of the application.

  The content column is strictly related to the forio content type. If the forio is a text, then we are directly storing the provided input text; but if the forio is an image or another media type, the contents column contains the information that we require to retrieve the content, for example an URL.

</Model>

## ForioLink
<Model
  modelTable="forios_link"
  :modelSchema="$frontmatter.models.forios_links">

  Forios links are the soul of Foria. For a generic overview, visit the [philosophy/forio-link](philosophy/forio-link) page.

</Model>

## ForioGraph
<Model
  modelTable="forios_graphs"
  :modelSchema="$frontmatter.models.forios_graphs">

  A forio graph is a named collection of Forios. For a generic overview, visit the [philosophy/forio-graph](philosophy/forio-graph) page.

</Model>
