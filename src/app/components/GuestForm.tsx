"use client";
import React from "react";

const GuestForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    
    // Optional: You can add form data processing here
    const formData = new FormData(e.currentTarget);
  
    // Show the backdrop
    const backdrop = document.querySelector(".backdrop-popup");
    if (backdrop) {
      const backdropEl = backdrop as HTMLElement;
      backdropEl.style.display = "block";
      backdropEl.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      console.error("Backdrop not found!");
    }
    
    // Show the popup
    const popup = document.getElementById("POPUP1");
    if (popup) {
      popup.style.display = "block";
      popup.style.top = "0px";
      popup.style.left = "0px";
    } else {
      console.error("Popup not found!");
    }
    
    // Reset the form after submission
    e.currentTarget.reset();
  };

  const closePopup = () => {
    // Hide the backdrop
    const backdrop = document.querySelector(".backdrop-popup");
    if (backdrop) {
      (backdrop as HTMLElement).style.display = "none";
    }
    
    // Hide the popup
    const popup = document.getElementById("POPUP1");
    if (popup) {
      popup.style.display = "none";
    }
  };

  const showPopup2 = () => {
    
    // Show the backdrop
    const backdrop = document.querySelector(".backdrop-popup");
    if (backdrop) {
      const backdropEl = backdrop as HTMLElement;
      backdropEl.style.display = "block";
      backdropEl.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      console.error("Backdrop not found!");
    }
    
    // Show POPUP2
    const popup2 = document.getElementById("POPUP2");
    if (popup2) {
      popup2.style.display = "block";
      popup2.style.top = "0px";
      popup2.style.left = "0px";
    } else {
      console.error("POPUP2 not found!");
    }
  };

  const closePopup2 = () => {
    // Hide the backdrop
    const backdrop = document.querySelector(".backdrop-popup");
    if (backdrop) {
      (backdrop as HTMLElement).style.display = "none";
    }
    
    // Hide POPUP2
    const popup2 = document.getElementById("POPUP2");
    if (popup2) {
      popup2.style.display = "none";
    }
  };

  const closeAllPopups = () => {
    // Hide the backdrop
    const backdrop = document.querySelector(".backdrop-popup");
    if (backdrop) {
      (backdrop as HTMLElement).style.display = "none";
    }
    
    // Hide all popups
    const popup1 = document.getElementById("POPUP1");
    if (popup1) {
      popup1.style.display = "none";
    }
    
    const popup2 = document.getElementById("POPUP2");
    if (popup2) {
      popup2.style.display = "none";
    }
  };

  return (
    <>
      <div id="SECTION7" className="ladi-section">
        <div className="ladi-section-background ladi-lazyload" />
        <div className="ladi-container">
          <div id="IMAGE23" className="ladi-element">
            <div className="ladi-image">
              <div className="ladi-image-background ladi-lazyload" />
            </div>
          </div>
          <div id="HEADLINE123" className="ladi-element ladi-animation-hidden">
            <p className="ladi-headline ladi-lazyload">
              Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một
              cách chu đáo nhất.
              <br />
              Trân trọng!&nbsp;
              <br />
            </p>
          </div>
          <div id="GROUP41" className="ladi-element">
            <div className="ladi-group">
              <div
                id="FORM2"
                data-config-id="6635f69f2dbe070012bd1e29"
                className="ladi-element ladi-animation-hidden"
              >
                <form autoComplete="off" method="post" className="ladi-form" onSubmit={handleSubmit}>
                  <div
                    id="BUTTON2"
                    className="ladi-element ladi-animation-hidden"
                    onClick={() => {
                      // Trigger form submit
                      const form = document.querySelector("#FORM2 form") as HTMLFormElement;
                      if (form) {
                        form.requestSubmit();
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="ladi-button ladi-transition">
                      <div className="ladi-button-background ladi-lazyload" />
                      <div
                        id="BUTTON_TEXT2"
                        className="ladi-element ladi-button-headline"
                      >
                        <p className="ladi-headline ladi-transition ladi-lazyload">
                          GỬI LỜI NHẮN &amp; xác nhận
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="FORM_ITEM2" className="ladi-element">
                    <div className="ladi-form-item-container">
                      <div className="ladi-form-item-background ladi-lazyload" />
                      <div className="ladi-form-item">
                        <input
                          autoComplete="off"
                          tabIndex={1}
                          name="name"
                          className="ladi-form-control"
                          type="text"
                          placeholder="Tên của bạn"
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </div>
                  <div id="FORM_ITEM3" className="ladi-element">
                    <div className="ladi-form-item-container">
                      <div className="ladi-form-item-background ladi-lazyload" />
                      <div className="ladi-form-item">
                        <textarea
                          autoComplete="off"
                          tabIndex={4}
                          name="message"
                          className="ladi-form-control"
                          placeholder="Gửi lời nhắn đến cô dâu chú rể"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div id="FORM_ITEM4" className="ladi-element">
                    <div className="ladi-form-item-container">
                      <div className="ladi-form-item-background ladi-lazyload" />
                      <div className="ladi-form-item">
                        <select
                          tabIndex={3}
                          name="form_item7"
                          className="ladi-form-control ladi-form-control-select"
                          data-selected=""
                        >
                          <option value="">Bạn sẽ đến chứ?</option>
                          <option value="Mình chắc chắn sẽ đến">
                            Mình chắc chắn sẽ đến
                          </option>
                          <option value="Xin lỗi mình bận rồi!">
                            Xin lỗi mình bận rồi!
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div id="FORM_ITEM5" className="ladi-element">
                    <div className="ladi-form-item-container">
                      <div className="ladi-form-item-background ladi-lazyload" />
                      <div className="ladi-form-item">
                        <select
                          tabIndex={4}
                          name="form_item8"
                          className="ladi-form-control ladi-form-control-select"
                          data-selected=""
                        >
                          <option value="">Bạn tham dự cùng ai?</option>
                          <option value="1 người">1 người</option>
                          <option value="2 người">2 người</option>
                          <option value="3 người">3 người</option>
                          <option value="4 người">4 người</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div id="FORM_ITEM6" className="ladi-element">
                    <div className="ladi-form-item-container">
                      <div className="ladi-form-item-background ladi-lazyload" />
                      <div className="ladi-form-item">
                        <select
                          tabIndex={5}
                          name="form_item9"
                          className="ladi-form-control ladi-form-control-select"
                          data-selected=""
                        >
                          <option value="">Bạn là khách mời của ai?</option>
                          <option value="Khách mời cô dâu">
                            Khách mời cô dâu
                          </option>
                          <option value="Khách mời chú rể">
                            Khách mời chú rể
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="ladi-hidden" />
                </form>
              </div>
              <div
                data-action="true"
                id="BUTTON3"
                className="ladi-element ladi-animation-hidden"
                onClick={showPopup2}
                style={{ cursor: "pointer" }}
              >
                <div className="ladi-button">
                  <div className="ladi-button-background ladi-lazyload" />
                  <div
                    id="BUTTON_TEXT3"
                    className="ladi-element ladi-button-headline"
                  >
                    <p className="ladi-headline ladi-lazyload">
                      GỬI QUÀ MỪNG CƯỚI&nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="SECTION_POPUP" className="ladi-section">
        <div className="ladi-section-background ladi-lazyload" />
        <div className="ladi-container">
          <div id="POPUP1" className="ladi-element">
            <div className="ladi-popup">
              <div className="ladi-popup-background" />
              <div className="popup-close" onClick={closePopup}></div>
              <div id="IMAGE37" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background ladi-lazyload" />
                </div>
              </div>
              <div id="BOX24" className="ladi-element">
                <div className="ladi-box ladi-transition ladi-lazyload" />
              </div>
              <div id="PARAGRAPH1" className="ladi-element">
                <div className="ladi-paragraph">
                  Cảm ơn bạn đã dành thời gian phản hồi.
                  <br />
                  Chúng mình vô cùng trân quý sự quan tâm của bạn.
                </div>
              </div>
              <div id="PARAGRAPH2" className="ladi-element">
                <div className="ladi-paragraph">Thank you!</div>
              </div>
            </div>
          </div>
          <div id="POPUP2" className="ladi-element">
            <div className="ladi-popup">
              <div className="ladi-popup-background" />
              <div className="popup-close" onClick={closePopup2}></div>
              <div id="IMAGE40" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background ladi-lazyload" />
                </div>
              </div>
              <div id="BOX25" className="ladi-element">
                <div className="ladi-box ladi-transition ladi-lazyload" />
              </div>
              <div id="GROUP35" className="ladi-element">
                <div className="">
                  <div
                    id="GROUP36"
                    className="ladi-element ladi-animation-hidden"
                  >
                    <div className="">
                      <div id="BOX26" className="ladi-element">
                        <div className="ladi-box ladi-transition " />
                      </div>
                      <div id="IMAGE38" className="ladi-element">
                        <div className="ladi-image">
                          <div className="ladi-image-background " />
                        </div>
                      </div>
                      <div id="HEADLINE130" className="ladi-element">
                        <h3 className="ladi-headline ">
                          Nguyen Tuan Anh
                        </h3>
                      </div>
                      <div id="HEADLINE131" className="ladi-element">
                        <h3 className="ladi-headline ">
                          Vietcombank
                        </h3>
                      </div>
                      <div id="HEADLINE132" className="ladi-element">
                        <h3 className="ladi-headline ">
                          9971223496
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    id="GROUP37"
                    className="ladi-element ladi-animation-hidden"
                  >
                    <div className="">
                      <div id="BOX27" className="ladi-element">
                        <div className="ladi-box ladi-transition " />
                      </div>
                      <div id="IMAGE39" className="ladi-element">
                        <div className="ladi-image">
                          <div className="ladi-image-background " />
                        </div>
                      </div>
                      <div id="HEADLINE133" className="ladi-element">
                        <h3 className="ladi-headline ">
                          Pham Thi Lan Anh
                        </h3>
                      </div>
                      <div id="HEADLINE134" className="ladi-element">
                        <h3 className="ladi-headline ">
                          Vietcombank
                        </h3>
                      </div>
                      <div id="HEADLINE135" className="ladi-element">
                        <h3 className="ladi-headline ">
                          0691000437155
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="backdrop-popup" onClick={closeAllPopups}></div>
    </>
  );
};

export default GuestForm;
