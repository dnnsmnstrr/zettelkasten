-- Documentation for neuron.dhall: https://neuron.zettel.page/configuration
{ siteTitle = "My Zettelkasten"
, author = Some "Dennis Muensterer"
, siteBaseUrl = Some "https://muensterer.xyz/zettelkasten"
-- List of color names: https://semantic-ui.com/usage/theming.html#sitewide-defaults
, theme = "teal"
, aliases =
    [ "home:index" ]
, editUrl =
    Some "https://github.com/dnnsmnstrr/zettelkasten/edit/main/"
, plugins = [ "neuronignore", "links", "uptree", "tags" ]
}
