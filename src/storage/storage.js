/**
 * COPIED FROM LIBRARY PROJECT -- NOT YET SETUP FOR THIS PROJECT
 * 
 * 
 * 
 * Tests whether storage is supported by the user's browser
 * Source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 * @param {*} type The type of storage to test
 * @returns True or an exception
 */
 function storageAvailable(type) {
    var storage;
    try {
      storage = window[type];
      var x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  
  /**
   * Saves the to do list to local storage
   */
  function saveToStorage() {
    localStorage.setItem("projects", JSON.stringify(projects));
  }
  
  /**
   * Loads the to do list from local storage on page load
   */
  function loadFromStorage() {
    if (localStorage.projects) {
      let data = localStorage.getItem("projects");
      return JSON.parse(data);
    }
  }

  export {saveToStorage, loadFromStorage}; 