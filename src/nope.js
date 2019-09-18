let didomiClosed = false

function thanksButNo (mutations) {
  // quantcast
  const qcReady = mutations.some(mutation => {
    return mutation.target.firstChild &&
      mutation.target.firstChild.classList &&
      mutation.target.firstChild.classList.contains("qc-cmp-ui-container")
  })
  if (qcReady) {
    window.__cmpui("setAndSaveAllConsent", false);
  }

  // Didomi
  if (!!window.Didomi && !didomiClosed) {
    window.Didomi.setUserDisagreeToAll()
    didomiClosed = true
  }

  // consentmanager
  if (!!window.cmpmngr) {
    window.cmpmngr.setConsentViaBtn(0)
  }
}

const observer = new MutationObserver(thanksButNo)
observer.observe(document.body, {childList: true})
