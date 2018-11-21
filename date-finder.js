function findMyNewDate(n) {
    // n = number of days to add or substract
    var originalDate = new Date(); // Sets the current date by default
    var modifiedDate = originalDate.setDate(originalDate.getDate() - n); // use - or +
    /*
    An inconvenience that this method presents, is that the resulting date
    will be displayed in miliseconds. However, the 'new Date()' method
    can also be used with a miliseconds value, so we can just use it again
    */
    return new Date(modifiedDate);
    // output YYYY-MM-DD-T-HH:MM:SS.msZ
    /* As an additional option, if we want to return it in a 'YYYY-MM-DD',
       we can change line 10 for the following:
        return new Date(modifiedDate).toISOString().split('T')[0];
    */
  }
  
  findMyNewDate(5);
