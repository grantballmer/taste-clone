module.exports.getFormattedTitle = function(title) {
    let formatted = title
      .toLowerCase()
      .replace(" - ", "-")
      .replace(/\s/g, "-")
      .replace(/:/g, "")
      .replace(`'`, "-");
      
    return formatted;
};