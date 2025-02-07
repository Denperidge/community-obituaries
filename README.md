# Community Obituaries

Death is a really difficult subject in which I have little wisdom to share. However, that doesn't make the subject less impactful or significant.

Community Obituaries is a website generation tool originally built to help aggregate and immortalise the deaths in and surrounding the queer and trans communities in Antwerp, Belgium.

This isn't much. But it's better than the significant event of a life ending being lost in taken-down articles, social media profiles and old chat logs.

This project is meant to be...
- Public: able to be rehosted by others who care about the same people originally put into this project...
- Open: ... while remaining easily editable for those wishing to share their own communities.
- Accessible: upping the accessibility where possible for people with disabilities. Additonally, the website should load easily no matter how old or new the device. A static site is all that's needed, without unnecessary JavaScript slowing things down.

## How-to
### Clone & build locally
This requires Node.JS and (optionally) git installed.
```bash
# Alternatively, download & extract zip from https://github.com/Denperidge/community-obituaries/archive/refs/heads/main.zip
git clone https://github.com/Denperidge/community-obituaries.git
cd community-obituaries

npm install  # Download project dependencies
npm run build  # Build static site

npm start  # Run development server on localhost:8080
```

That's it! The resulting site will be output in the `dist/` folder.

### Change data & customise instance
All content/basic editing (read: no-code-required based edits) can be done in the [src/_data](src/_data/) directory.
- [config.yaml](src/_data/config.yaml) lets you edit the sites title, description, date format...
- [obituaries.yaml](src/_data/obituaries.yaml) lets you edit the obituaries presented on the site.
