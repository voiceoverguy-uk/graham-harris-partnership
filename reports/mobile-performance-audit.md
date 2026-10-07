# Mobile performance measurement — 7 October 2026

## Method

Two mobile Lighthouse 13.5.0 laboratory runs each on the public homepage and gallery at https://www.grahamharrispartnership.co.uk, using Chromium 152, a simulated 412 × 823 mobile screen, Lighthouse's simulated network (150 ms RTT, ~1.6 Mbps) and 4× CPU slowdown. The public site was still serving an older release at the time of measurement. Results vary by run and by the gallery's randomly selected images.

I also measured the same gallery code in a local production build before changing it (one run), and a new local production build after the change (two runs). The local measurements are **not** measurements of the published website; they provide a comparison in the same test environment.

| Page / build | Lighthouse score | FCP | LCP | CLS | TBT | Images fetched on load |
| --- | --- | --- | --- | --- | --- | --- |
| Public homepage, run 1 | 84 | 1.04 s | 2.15 s | 0 | 573 ms | 0 |
| Public homepage, run 2 | 83 | 1.18 s | 2.27 s | 0 | 621 ms | 0 |
| Public gallery, run 1 | 63 | 1.35 s | 3.98 s | 0.009 | 1,065 ms | 27 |
| Public gallery, run 2 | 74 | 1.27 s | 2.85 s | 0.009 | 894 ms | 23 |
| Local production gallery, before | 62 | 1.35 s | 4.12 s | 0.009 | 1,098 ms | 24 |
| Local production gallery, after, run 1 | 79 | 1.04 s | 3.37 s | 0.009 | 485 ms | 4 |
| Local production gallery, after, run 2 | 74 | 0.93 s | 3.91 s | 0.009 | 542 ms | 4 |

FCP = First Contentful Paint; LCP = Largest Contentful Paint; CLS = Cumulative Layout Shift; TBT = Total Blocking Time. Lighthouse scores and load timings are laboratory estimates, not real-user Core Web Vitals.

## Finding and focused fix

The public gallery loaded 23–27 images on initial mobile navigation, despite showing one slide. Its largest image was marked lazy and, because the gallery shuffled images after hydration, was not reliably discoverable in the initial HTML. This was confirmed by Lighthouse's LCP discovery diagnostic and the request waterfall. The homepage had no images and much lower LCP, so no homepage change was justified by these measurements.

The gallery now retains its random image ordering but performs the shuffle during server rendering. The first visible image is marked eager and high priority; image elements for distant slides are held back until navigation approaches them. Text, captions, project images, styling, and navigation controls remain the same. In the local production checks, images fetched on load fell from 24 to 4, while TBT fell from ~1,098 ms to ~485–542 ms. LCP still varies considerably with image choice; do not interpret these few samples as a guaranteed live-site speed improvement.

## Not measured / next check

- Google's PageSpeed Insights API returned HTTP 429 (daily query quota exceeded). No PageSpeed or CrUX **field** data was available here.
- INP (Interaction to Next Paint) requires real visitor interactions and cannot be inferred from Lighthouse TBT. Field LCP and CLS are also unknown. This report therefore does **not** assert that the site passes Google's Core Web Vitals assessment.
- The public site has not yet been updated with the local fix. After publication, remeasure the live gallery under the same conditions and review available Search Console / CrUX field data; do not compare a public old-build score to a local new-build score as if they were equivalent.
