// import * as fs from 'fs'
// import * as path from 'path'

const path = require('path')
const fs = require('fs')

const articlesDir = path.join(__dirname, '..', 'articles')
console.log('articlesDir:', articlesDir)

fs.readdir(articlesDir, (err, folders) => {
  if (err) {
    console.error(err)
    return
  }

  console.log('folders:', folders)

  folders.forEach((folder) => {
    const filePath = path.join(articlesDir, folder, 'page.mdx')

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }

      const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/
      const frontmatterMatch = data.match(frontmatterRegex)
      console.log('frontmatterMatch:', frontmatterMatch)

      if (!frontmatterMatch) {
        console.error(`No frontmatter found in ${filePath}`)
        return
      }
      const frontmatter = frontmatterMatch[1]
      let article = {
        author: 'Mads Brodt',
        date: '',
        title: '',
        description: '',
      }
      let metadata = { title: '', description: '' }

      try {
        const frontmatterObj = frontmatter.split('\n').reduce((acc, line) => {
          const [key, value] = line.split(':')
          if (key && value) {
            acc[key.trim()] = value.trim()
          }
          return acc
        }, {})

        const { title, description, date } = frontmatterObj
        article = { ...article, title, description, date }
        metadata = { title, description }
      } catch (e) {
        console.error(`Error parsing frontmatter in ${filePath}: ${e.message}`)
        return
      }
      const newFileContent = data.replace(frontmatterRegex, '')
      const newFilePath = path.join(articlesDir, folder, 'index.mdx')

      fs.writeFile(newFilePath, newFileContent, (err) => {
        if (err) {
          console.error(err)
          return
        }

        console.log(`Updated ${newFilePath}`)

        fs.appendFile(
          newFilePath,
          `\n\nexport const article = ${JSON.stringify(article)};\n\n`,
          (err) => {
            if (err) {
              console.error(err)
              return
            }

            console.log(`Added article metadata to ${newFilePath}`)

            fs.appendFile(
              newFilePath,
              `\nexport const metadata = ${JSON.stringify(metadata)};\n`,
              (err) => {
                if (err) {
                  console.error(err)
                  return
                }

                console.log(`Added metadata to ${newFilePath}`)
              },
            )
          },
        )
      })
    })
  })
})
