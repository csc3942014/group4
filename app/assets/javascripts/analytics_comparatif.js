/**
* Created with group4.
* User: csc3942014
* Date: 2014-06-11
* Time: 09:33 PM
* To change this template use Tools | Templates.
*/

function applyMainFilter(name, type) {
    $(".subFiltersContainer").load("/analytics_comparatif/apply_main_filters", {
        filter: name, type: type
    });
}

function applySubFilterKb(kb1, kb2, typeF) {
    $(".comparisonContainer").load("/analytics_comparatif/apply_sub_filters_kb", {
        kb1: kb1, kb2: kb2, typef: typeF
    });
}

function applySubFilterAttributes(attributes, typeF) {
    $(".comparisonContainer").load("/analytics_comparatif/apply_sub_filters_attributes", {
        attributes: attributes, typef: typeF
    });
}

