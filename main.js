// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(user) {
    return user.userRole === 'ADMIN';
  }
  function getEmail(user) {

    const firstInitial = user.firstName[0].toLowerCase();
    const lastName = user.lastName.toLowerCase();
    
    const email = `${firstInitial}${lastName}.prsvr@gmail.com`;
    
    return email;
  }

  function getPlaylistLength(playlist) {
    
    return playlist.songs.length;
  }

  function getHardestHomework(homeworks) {
    
    if (homeworks.length === 0) {
      return "";
    }
  
    let hardestHomework = homeworks[0].name;
    let lowestScore = homeworks[0].averageScore;
  
    // Loop through the array of homeworks to find the one with the lowest score
    for (let i = 1; i < homeworks.length; i++) {
      if (homeworks[i].averageScore < lowestScore) {
        lowestScore = homeworks[i].averageScore;
        hardestHomework = homeworks[i].name;
      }
    }
  
    // Return the name of the hardest homework
    return hardestHomework;
  }

  function createPhonebook(names, phoneNumbers) {
    const phonebook = {};
  
    // Loop through the names and phone numbers and add them to the phonebook object
    for (let i = 0; i < names.length; i++) {
      phonebook[names[i]] = phoneNumbers[i];
    }
  
    return phonebook;
  }

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};