var row$;
var region = apex.region("SOD");
var view = region.call("getCurrentView");


if (view.internalIdentifier === "grid") {
    row$ = region.widget().find(".a-GV-row").last();
    view.view$.grid("setSelection", row$);
    region.call("getActions").invoke("selection-add-row");
}
