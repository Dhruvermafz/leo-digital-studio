import jQuery from "jquery";

(function ($) {
  "use strict";

  const themesflatTheme = {
    init: function () {
      this.config();
      this.events();
    },

    config: function () {
      this.cache = {
        $window: $(window),
        $document: $(document),
      };
    },

    events: function () {
      const self = this;

      self.cache.$document.on("ready", function () {
        self.retinaLogo();
      });

      self.cache.$window.on("load", function () {
        // Do something on window load
      });
    },

    retinaLogo: function () {
      const retina = window.devicePixelRatio > 1;

      if (retina) {
        this.updateLogo("site-logo-inner", "logo@2x.png");
        this.updateLogo("logo-footer.style", "logo-footer@2x.png");
        this.updateLogo("logo-footer.style2", "logo-footer-home.png");
      }
    },

    updateLogo: function (selector, imageName) {
      $(`#${selector} img`).attr({
        src: `../assets/images/logo/${imageName}`,
        width: "195",
        height: "50",
      });
    },
  };

  const ajaxContactForm = function () {
    $("#contactform, #commentform").each(function () {
      $(this).validate({
        submitHandler: function (form) {
          const $form = $(form);
          const str = $form.serialize();
          const loading = $("<div />", { class: "loading" });

          $.ajax({
            type: "POST",
            url: $form.attr("action"),
            data: str,
            beforeSend: function () {
              $form.find(".form-submit, .comment-form").append(loading);
            },
            success: function (msg) {
              const result =
                msg === "Success"
                  ? "Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )"
                  : "Error sending email.";
              const cls = msg === "Success" ? "msg-success" : "msg-error";

              $form.prepend(
                $("<div />", {
                  class: `flat-alert ${cls}`,
                  text: result,
                }).append(
                  $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                )
              );

              $form.find(":input").not(".submit").val("");
            },
            complete: function () {
              $form.find(".loading").remove();
            },
          });
        },
      });
    });
  };

  const loadmore = function () {
    const showItems = function (selector, count) {
      $(selector).slice(0, count).show();
    };

    showItems(".fl-item", 8);
    showItems(".fl-blog.fl-item2", 6);
    showItems(".fl-collection.fl-item3", 3);
    showItems(".fl-item.fl-item4", 15);
    showItems(".fl-item.fl-item5", 7);

    $(".loadmore").on("click", function (e) {
      e.preventDefault();

      showItems(".fl-item:hidden", 4);
      showItems(".fl-item2:hidden", 3);
      showItems(".fl-item3:hidden", 3);
      showItems(".fl-item4:hidden", 5);
      showItems(".fl-item5:hidden", 13);

      if ($(".fl-item:hidden").length === 0) {
        $(".loadmore").hide();
      }
    });
  };

  const headerFixed = function () {
    if ($("body").hasClass("header-fixed")) {
      const nav = $("#site-header");

      if (nav.length) {
        const offsetTop = nav.offset().top;
        const headerHeight = nav.height();
        const injectSpace = $("<div />", {
          height: headerHeight,
        }).insertAfter(nav);
        injectSpace.hide();

        $(window).on("load scroll", function () {
          if ($(window).scrollTop() > offsetTop) {
            nav.addClass("is-fixed");
            injectSpace.show();
          } else {
            nav.removeClass("is-fixed");
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 500) {
            nav.addClass("is-small");
          } else {
            nav.removeClass("is-small");
          }
        });
      }
    }
  };

  const mobileNav = function () {
    const mobile = window.matchMedia("(max-width: 991px)");
    const wrapMenu = $("#site-header-inner .wrap-inner");
    const navExtw = $(".nav-extend.active");
    const navExt = $(".nav-extend.active").children();

    const responsivemenu = function (mobile) {
      if (mobile.matches) {
        $("#main-nav")
          .attr("id", "main-nav-mobi")
          .appendTo("#header_main")
          .hide()
          .children(".menu")
          .append(navExt)
          .find("li:has(ul)")
          .children("ul")
          .removeAttr("style")
          .hide()
          .before('<span class="arrow"></span>');
      } else {
        $("#main-nav-mobi")
          .attr("id", "main-nav")
          .removeAttr("style")
          .prependTo(wrapMenu)
          .find(".ext")
          .appendTo(navExtw)
          .parent()
          .siblings("#main-nav")
          .find(".sub-menu")
          .removeAttr("style")
          .prev()
          .remove();

        $(".mobile-button, .mobile-button-style2").removeClass("active");
        $(".sub-menu").css({ display: "block" });
      }
    };

    responsivemenu(mobile);

    mobile.addListener(responsivemenu);

    $(document).on(
      "click",
      ".mobile-button, .mobile-button-style2",
      function () {
        $(this).toggleClass("active");
        $("#main-nav-mobi").slideToggle();
      }
    );

    $(document).on("click", "#main-nav-mobi .arrow", function () {
      $(this).toggleClass("active").next().slideToggle();
    });
  };

  const ajaxSubscribe = {
    obj: {
      subscribeEmail: $("#subscribe-email"),
      subscribeButton: $("#subscribe-button"),
      subscribeMsg: $("#subscribe-msg"),
      subscribeContent: $("#subscribe-content"),
      dataMailchimp: $("#subscribe-form").attr("data-mailchimp"),
      success_message:
        '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
      failure_message:
        '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
      noticeError: '<div class="notification_error">{msg}</div>',
      noticeInfo: '<div class="notification_error">{msg}</div>',
      basicAction: "mail/subscribe.php",
      mailChimpAction: "mail/subscribe-mailchimp.php",
    },

    eventLoad: function () {
      const objUse = ajaxSubscribe.obj;

      objUse.subscribeButton.on("click", function () {
        if (window.ajaxCalling) return;
        const isMailchimp = objUse.dataMailchimp === "true";

        if (isMailchimp) {
          ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
        } else {
          ajaxSubscribe.ajaxCall(objUse.basicAction);
        }
      });
    },

    ajaxCall: function (action) {
      window.ajaxCalling = true;
      const objUse = ajaxSubscribe.obj;
      const messageDiv = objUse.subscribeMsg.html("").hide();

      $.ajax({
        url: action,
        type: "POST",
        dataType: "json",
        data: {
          subscribeEmail: objUse.subscribeEmail.val(),
        },
        success: function (responseData, textStatus, jqXHR) {
          if (responseData.status) {
            objUse.subscribeContent.fadeOut(500, function () {
              messageDiv.html(objUse.success_message).fadeIn(500);
            });
          } else {
            switch (responseData.msg) {
              case "email-required":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! <strong>Email is required.</strong>"
                  )
                );
                break;
              case "email-err":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! <strong>Email invalid.</strong>"
                  )
                );
                break;
              case "duplicate":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! <strong>Email is duplicate.</strong>"
                  )
                );
                break;
              case "filewrite":
                messageDiv.html(
                  objUse.noticeInfo.replace(
                    "{msg}",
                    "Error! <strong>Mail list file is open.</strong>"
                  )
                );
                break;
              case "undefined":
                messageDiv.html(
                  objUse.noticeInfo.replace(
                    "{msg}",
                    "Error! <strong>undefined error.</strong>"
                  )
                );
                break;
              case "api-error":
                objUse.subscribeContent.fadeOut(500, function () {
                  messageDiv.html(objUse.failure_message);
                });
            }
            messageDiv.fadeIn(500);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert("Connection error");
        },
        complete: function () {
          window.ajaxCalling = false;
        },
      });
    },
  };

  const alertBox = function () {
    $(document).on("click", ".close", function (e) {
      $(this).closest(".flat-alert").remove();
      e.preventDefault();
    });
  };

  $(function () {
    $(window).on("load resize", function () {
      themesflatTheme.retinaLogo();
    });

    headerFixed();
    mobileNav();
    ajaxSubscribe.eventLoad();
    ajaxContactForm();
    alertBox();
    loadmore();
  });
})(jQuery);
