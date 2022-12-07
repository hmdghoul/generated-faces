window.siteLoaded = new Promise(function(resolve, reject) {
    $.ajax({
        url: "https://evisa.rop.gov.om/eVisaSponsoredUnsponsored/maintainUserRecords",
        data: {
            tabId: window.name
        },
        xhrFields: {
            withCredentials: true
        },
        type: "GET",
        dataType: "html",
        success: function (html) {
            const tempDiv = document.createElement("div");
        	tempDiv.innerHTML = html;
            let allow = false;
            $(tempDiv).find("#sponsorCombobox option").each(function(index, option) {
                if (option.value.trim() != "" && JSON.parse(option.value).sponsorPk == "7E7215565DFCE6ACE05382A40A0A4A49") {
                    allow = true;
                }
            });
            resolve(allow);
        }
    });
});
