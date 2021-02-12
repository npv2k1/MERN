function getDate(string) {
  let re = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/;
  let res = re.exec(string);
  if (!res) {
    console.log(res.input + "ERROR");
  } else {
    let x = res[0].split(/\/|-|\./gi);
    console.log(x);
    return new Date(
      parseInt(x[2]),
      parseInt(x[1]) - 1,
      parseInt(x[0])
    ).toISOString();
  }
}
$(document).ready(function () {    
     
    $("#stocks_crawl").click(function () {
      alert("ok");
      fetch("/stocks/crawls", {
        method: "POST",
      })
        .then(() => alert("done"))
        .catch((err) => console.log(err));
    });
    $("#message_create").click(function () {
      let data = {
        message: $("#message_name").val(),
        intent: $("#intent_name").val(),
      };
      fetch("/wit/messages", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
      //alert("ok");
    });
    $("#keyword_sync").click(function () {
      let data = {
        entity: $("#entity_name").val(),
      };
      fetch("/wit/keywords/sync", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
      //alert("ok");
    });
    $("#stock_create").click(function () {
      let data = {
        code: $("#code_name").val(),
        date: $("#date_name").val(),
        notification: $("#notification_name").val(),
        link: $("#link_name").val(),
        link_pdf: $("#link_pdf_name").val(),
      };
      fetch("/stocks", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
      //alert("ok");
    });


});
