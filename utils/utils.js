module.exports = {
    //This function creates random valid email address
    randomEmail: (length, valid = true) => {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        if (valid){
            return result + "@gmail.com";
        }
        else{
            return result;
        }        
      },

    // This function creates random password
    randomPassword: (length) => {
      var result = "";
      var characters =
        "ABCabc!$%123";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },

}