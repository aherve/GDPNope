function thanksButNo (mutations) {
  const qcReady = mutations.some(mutation => {
    return mutation.target.firstChild &&
      mutation.target.firstChild.classList &&
      mutation.target.firstChild.classList.contains("qc-cmp-ui-container")
  })
  if (qcReady) {
    window.__cmpui("setAndSaveAllConsent", false);
  }
}

const observer = new MutationObserver(thanksButNo)
observer.observe(document.body, {childList: true})
