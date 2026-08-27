/** Minimal type declarations for intl-tel-input v17 (ships no types). */
declare module 'intl-tel-input' {
  interface IntlTelInputInstance {
    setCountry: (iso2: string) => void
    getSelectedCountryData: () => { dialCode?: string; name?: string }
    isValidNumber: () => boolean
    destroy: () => void
  }

  const intlTelInput: (
    input: HTMLElement,
    options?: Record<string, unknown>,
  ) => IntlTelInputInstance

  export default intlTelInput
}
