"use client";
import React, { useState } from "react";

interface GuestMessageData {
  _id: string;
  name: string;
  message: string;
  willAttend: string;
  attendWith: string;
  guestOf: string;
  createdAt: string;
}

const GuestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [messages, setMessages] = useState<GuestMessageData[]>([]);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);

  const validateForm = (formData: FormData): boolean => {
    const newErrors: { name?: string; message?: string } = {};
    
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;

    if (!name || !name.trim()) {
      newErrors.name = 'Vui lòng nhập tên của bạn';
    }

    if (!message || !message.trim()) {
      newErrors.message = 'Vui lòng nhập lời nhắn';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Lưu tham chiếu đến form trước khi xử lý bất đồng bộ
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Validate form
    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Prepare data to send
      const data = {
        name: formData.get('name') as string,
        message: formData.get('message') as string,
        willAttend: formData.get('form_item7') as string,
        attendWith: formData.get('form_item8') as string,
        guestOf: formData.get('form_item9') as string,
      };

      // Send to API
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Có lỗi xảy ra khi gửi lời nhắn');
      }

      // Reset the form after successful submission
      form.reset();
      
      // Show the backdrop
      const backdrop = document.querySelector(".backdrop-popup");
      if (backdrop) {
        const backdropEl = backdrop as HTMLElement;
        backdropEl.style.display = "block";
        backdropEl.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      }
      
      // Show the popup
      const popup = document.getElementById("POPUP1");
      if (popup) {
        popup.style.display = "block";
        popup.style.top = "0px";
        popup.style.left = "0px";
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error ? error.message : 'Có lỗi xảy ra khi gửi lời nhắn. Vui lòng thử lại!';
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
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

  const loadMessages = async () => {
    setIsLoadingMessages(true);
    try {
      const response = await fetch('/api/messages?limit=100');
      const result = await response.json();

      if (result.success) {
        setMessages(result.data);
      } else {
        console.error('Error loading messages:', result.error);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setIsLoadingMessages(false);
    }
  };

  const showPopup2 = async () => {
    // Load messages first
    loadMessages();
    
    // Show the backdrop
    const backdrop = document.querySelector(".backdrop-popup");
    if (backdrop) {
      const backdropEl = backdrop as HTMLElement;
      backdropEl.style.display = "block";
      backdropEl.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      console.error("Backdrop not found!");
    }
    
    // Show POPUP3 (messages list)
    const popup3 = document.getElementById("POPUP3");
    if (popup3) {
      popup3.style.display = "block";
      popup3.style.top = "0px";
      popup3.style.left = "0px";
    } else {
      console.error("POPUP3 not found!");
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

  const closePopup3 = () => {
    // Hide the backdrop
    const backdrop = document.querySelector(".backdrop-popup");
    if (backdrop) {
      (backdrop as HTMLElement).style.display = "none";
    }
    
    // Hide POPUP3
    const popup3 = document.getElementById("POPUP3");
    if (popup3) {
      popup3.style.display = "none";
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

    const popup3 = document.getElementById("POPUP3");
    if (popup3) {
      popup3.style.display = "none";
    }
  };

  const showGiftPopup = () => {
    // Show the backdrop
    const backdrop = document.querySelector(".backdrop-popup");
    if (backdrop) {
      const backdropEl = backdrop as HTMLElement;
      backdropEl.style.display = "block";
      backdropEl.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    
    // Show POPUP2 (gift popup)
    const popup2 = document.getElementById("POPUP2");
    if (popup2) {
      popup2.style.display = "block";
      popup2.style.top = "0px";
      popup2.style.left = "0px";
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
                      if (!isSubmitting) {
                        // Trigger form submit
                        const form = document.querySelector("#FORM2 form") as HTMLFormElement;
                        if (form) {
                          form.requestSubmit();
                        }
                      }
                    }}
                    style={{ cursor: isSubmitting ? "not-allowed" : "pointer", opacity: isSubmitting ? 0.6 : 1 }}
                  >
                    <div className="ladi-button ladi-transition">
                      <div className="ladi-button-background ladi-lazyload" />
                      <div
                        id="BUTTON_TEXT2"
                        className="ladi-element ladi-button-headline"
                      >
                        <p className="ladi-headline ladi-transition ladi-lazyload">
                          {isSubmitting ? 'ĐANG GỬI...' : 'GỬI LỜI NHẮN & xác nhận'}
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
                          required
                        />
                        {errors.name && (
                          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                            {errors.name}
                          </div>
                        )}
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
                          required
                        />
                        {errors.message && (
                          <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                            {errors.message}
                          </div>
                        )}
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
                onClick={showGiftPopup}
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
              <div
                data-action="true"
                id="BUTTON3"
                className="ladi-element ladi-animation-hidden"
                onClick={showPopup2}
                style={{ cursor: "pointer", top: "404px" }}
              >
                <div className="ladi-button">
                  <div className="ladi-button-background ladi-lazyload" />
                  <div
                    id="BUTTON_TEXT3"
                    className="ladi-element ladi-button-headline"
                  >
                    <p className="ladi-headline ladi-lazyload">
                    XEM LỜI CHÚC&nbsp;
                    </p>
                  </div>
                </div>
              </div>
              {/* <div
                data-action="true"
                id="BUTTON4"
                className="ladi-element ladi-animation-hidden"
                onClick={showPopup2}
                style={{ cursor: "pointer", marginTop: "10px" }}
              >
                <div className="ladi-button">
                  <div className="ladi-button-background ladi-lazyload" />
                  <div
                    id="BUTTON_TEXT4"
                    className="ladi-element ladi-button-headline"
                  >
                    <p className="ladi-headline ladi-lazyload">
                      XEM LỜI CHÚC&nbsp;
                    </p>
                  </div>
                </div>
              </div> */}
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
          <div id="POPUP3" className="ladi-element">
            <div className="ladi-popup">
              <div className="ladi-popup-background" />
              <div className="popup-close" onClick={closePopup3}></div>
            
              {/* <div id="HEADLINE136" className="ladi-element">
                <h2 className="ladi-headline" style={{ textAlign: 'center', padding: '20px 0' }}>
                  Lời chúc từ khách mời
                </h2>
              </div> */}
              <div id="MESSAGES_CONTAINER" className="ladi-element" style={{
                maxHeight: '440px',
                overflowY: 'auto',
                padding: '20px',
                top: 0,
    width: "100%",
              }}>
                   <h2 className="ladi-headline" style={{ textAlign: 'center', padding: '20px 0', fontSize: '20px', fontWeight: 'bold' }}>
                  Lời chúc từ khách mời
                </h2>
                {isLoadingMessages ? (
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <p>Đang tải lời chúc...</p>
                  </div>
                ) : messages.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <p>Chưa có lời chúc nào.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {messages.map((msg) => (
                      <div
                        key={msg._id}
                        style={{
                          backgroundColor: '#f9f9f9',
                          padding: '15px',
                          borderRadius: '8px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <strong style={{ fontSize: '16px', color: '#333' }}>{msg.name}</strong>
                          <span style={{ fontSize: '12px', color: '#999' }}>
                            {new Date(msg.createdAt).toLocaleDateString('vi-VN')}
                          </span>
                        </div>
                        <p style={{ margin: '8px 0', color: '#555', lineHeight: '1.5' }}>
                          {msg.message}
                        </p>
                        <div style={{ fontSize: '12px', color: '#777', marginTop: '8px', display: 'flex', gap: '10px', flexDirection: 'column' }}>
                          {msg.willAttend && (
                            <div><span style={{ color: 'green' }}>✓</span> {msg.willAttend}</div>
                          )}
                          {msg.attendWith && (
                            <div><span style={{ color: 'blue' }}>👥</span> Tham dự: {msg.attendWith}</div>
                          )}
                          {msg.guestOf && (
                            <div><span style={{ color: 'red' }}>💐</span> {msg.guestOf}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
