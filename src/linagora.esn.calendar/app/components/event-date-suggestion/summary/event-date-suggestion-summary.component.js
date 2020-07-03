'use strict';

angular.module('esn.calendar')
  .component('calEventDateSuggestionSummary', {
    template: require("./event-date-suggestion-summary.pug"),
    bindings: {
      event: '<',
      user: '<'
    }
  });
