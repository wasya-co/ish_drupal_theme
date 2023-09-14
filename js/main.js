
$ = jQuery;
$(function () {

  $(".collapse-expand").each(function() {
    const thisId = $(this).attr('id')
    const state = localStorage.getItem("collapse-expand#"+thisId)
    if (state === 'collapsed') {
      $(this).next().slideToggle()
      $(this).addClass('collapsed')
    }
  })
  $(".collapse-expand").click(function (_e) {
    const thisId = $(this).attr('id')
    const state = localStorage.getItem("collapse-expand#"+thisId)
    if (state === 'collapsed') {
      localStorage.removeItem("collapse-expand#"+thisId)
      $(this).removeClass('collapsed')
    } else {
      localStorage.setItem("collapse-expand#"+thisId, "collapsed")
      $(this).addClass('collapsed')
    }
    $(this).next().slideToggle();
  }).children().click(function (e) {
    e.stopPropagation()
  })

});

