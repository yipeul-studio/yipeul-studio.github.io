# Meta Pixel events

Pixel ID: `1776157770268791`

`PageView` runs once on page load. All button interactions use custom click events, not booking-completion or purchase events. Parameters contain static button ID and placement only. FAQ state is `open` or `close`; question text, phone numbers and image filenames are not sent as event parameters.

| Button ID | Custom event | Placement |
|---|---|---|
| top-01 | NavigationClick | top |
| top-02 | NaverBookingClick | top |
| top-03 | NavigationClick | top |
| top-04 | VideoPlayClick | top |
| event-05 | NaverBookingClick | event |
| event-06 | KakaoConsultClick | event |
| works-photo-1 | GalleryOpen | works |
| works-photo-2 | GalleryOpen | works |
| works-photo-3 | GalleryOpen | works |
| works-photo-4 | GalleryOpen | works |
| faq-10 | FAQToggle | faq |
| faq-11 | FAQToggle | faq |
| faq-12 | FAQToggle | faq |
| faq-13 | FAQToggle | faq |
| faq-14 | FAQToggle | faq |
| faq-15 | FAQToggle | faq |
| reviews-16 | ReviewClick | reviews |
| offer-17 | NaverBookingClick | offer |
| reservation-18 | NaverBookingClick | reservation |
| reservation-19 | KakaoConsultClick | reservation |
| space-20 | PhoneClick | space |
| space-21 | DirectionsClick | space |
| footer-22 | NavigationClick | footer |
| footer-23 | InstagramClick | footer |
| sticky-24 | NaverBookingClick | sticky |
| sticky-25 | KakaoConsultClick | sticky |
| gallery_dialog-26 | GalleryClose | gallery_dialog |

Validate receipt in Meta Events Manager → Test Events. Browser/ad-blocker settings may prevent delivery. Do not add duplicate click rules through the Event Setup Tool.
