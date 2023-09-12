const form = document.getElementById("contact");
const msg = document.getElementById("submit-message");
const meta = document.getElementById("meta");
if (meta instanceof HTMLInputElement) {
  meta.value = JSON.stringify({
    url: window.location.href,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    language: navigator.language,
    doNotTrack: navigator.doNotTrack,
    cookieEnabled: navigator.cookieEnabled,
  });
}

if (form instanceof HTMLFormElement && msg instanceof HTMLParagraphElement) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        msg.style.opacity = "1";
        msg.style.visibility = "visible";
        if (res.ok) {
          form.reset();
          msg.style.color = "var(--color-success)";
          msg.textContent = "Thanks for reaching out! We'll be in touch soon.";
        } else {
          msg.style.color = "hsl(var(--destructive))";
          msg.textContent = "Something went wrong. Please try again.";
        }
      })
      .catch((err) => {
        console.error(err);
        msg.style.opacity = "1";
        msg.style.visibility = "visible";
        msg.style.color = "hsl(var(--destructive))";
        msg.textContent = "Something went wrong. Please try again.";
      });
  });
}

const attribution = document.getElementById("attribution") as HTMLSelectElement | null;
const attributionOther = document.getElementById("attribution-other") as HTMLDivElement | null;
const attributionOtherLabel = document.getElementById("attribution-other-label") as HTMLLabelElement | null;

if (attribution && attributionOther) {
  attribution.addEventListener("change", (e) => {
    if (!(e.target instanceof HTMLSelectElement) || !(attributionOtherLabel instanceof HTMLLabelElement)) {
      console.log("hi", e.target, attributionOtherLabel);
      return;
    }

    if (e.target.value === "OTHER" || e.target.value === "REFERRAL") {
      attributionOther.classList.add("flex");
      attributionOther.classList.remove("hidden");
      attributionOtherLabel.textContent = e.target.value === "OTHER" ? "Other" : "Who Referred You?";
    } else {
      attributionOther.classList.remove("flex");
      attributionOther.classList.add("hidden");
    }
  });
}
