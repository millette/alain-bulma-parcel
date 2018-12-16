# alain-bulma-parcel

## Install

```sh
git clone https://github.com/millette/alain-bulma-parcel.git
npm install
npm start # et pointer son browser sur http://localhost:1234
# Les changements aux sources devraient
# se voir dans le browser automatiquement
# Ctrl-C pour quitter
npm run build # produit une version finale (production) dans dist/
```

## Notes

- Les données JSON sont maintenant dans data.json
- jQuery et bulma sont installés via npm
- Le HTML réfère à bulma via son chemin dans les modules
- Le HTML réfère à main.js uniquement, aucun autre JS
- main.js s'occupe d'importer jQuery et le JSON (grace à parcel)
