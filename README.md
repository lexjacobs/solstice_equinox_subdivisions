# solstice_equinox_subdivisions
Dividing the calendar year into 16ths

Exact millisecond calculations of solstice/equinox periods
obtained via a combination of the [frink packages](https://frinklang.org/): `secant` and `exactSeasons`.

Subdivisions calculated between known quantities. For example, `Spring 2015 + 0/16ths` is obtained directly from the frink calculation. The quarters are derived by adding 1/4ths of the time period until the next known quarter.


```
JavaScript - index.js:159
[ { season: 'Spring 2015',
    segments:
     [ 'Spring + 0/16ths. SEASON 2015-03-20 15:45:08.574 -0700',
       'Spring + 1/16ths. 16TH 2015-04-12 20:13:20.189 -0700',
       'Spring + 2/16ths. HALF 2015-05-06 00:41:31.805 -0700',
       'Spring + 3/16ths. 16TH 2015-05-29 05:09:43.421 -0700' ] },
  { season: 'Summer 2015',
    segments:
     [ 'Summer + 0/16ths. SEASON 2015-06-21 09:37:55.037 -0700',
       'Summer + 1/16ths. 16TH 2015-07-14 19:33:34.230 -0700',
       'Summer + 2/16ths. HALF 2015-08-07 05:29:13.424 -0700',
       'Summer + 3/16ths. 16TH 2015-08-30 15:24:52.618 -0700' ] },
  { season: 'Autumn 2015',
    segments:
     [ 'Autumn + 0/16ths. SEASON 2015-09-23 01:20:31.812 -0700',
       'Autumn + 1/16ths. 16TH 2015-10-15 12:27:22.879 -0700',
       'Autumn + 2/16ths. HALF 2015-11-06 22:34:13.947 -0800',
       'Autumn + 3/16ths. 16TH 2015-11-29 09:41:05.015 -0800' ] },
  { season: 'Winter 2015',
    segments:
     [ 'Winter + 0/16ths. SEASON 2015-12-21 20:47:56.083 -0800',
       'Winter + 1/16ths. 16TH 2016-01-13 02:43:29.719 -0800',
       'Winter + 2/16ths. HALF 2016-02-04 08:39:03.356 -0800',
       'Winter + 3/16ths. 16TH 2016-02-26 14:34:36.993 -0800' ] },
  { season: 'Spring 2016',
    segments:
     [ 'Spring + 0/16ths. SEASON 2016-03-19 21:30:10.630 -0700',
       'Spring + 1/16ths. 16TH 2016-04-12 02:01:10.580 -0700',
       'Spring + 2/16ths. HALF 2016-05-05 06:32:10.530 -0700',
       'Spring + 3/16ths. 16TH 2016-05-28 11:03:10.480 -0700' ] },
  { season: 'Summer 2016',
    segments:
     [ 'Summer + 0/16ths. SEASON 2016-06-20 15:34:10.430 -0700',
       'Summer + 1/16ths. 16TH 2016-07-14 01:30:54.449 -0700',
       'Summer + 2/16ths. HALF 2016-08-06 11:27:38.468 -0700',
       'Summer + 3/16ths. 16TH 2016-08-29 21:24:22.487 -0700' ] },
  { season: 'Autumn 2016',
    segments:
     [ 'Autumn + 0/16ths. SEASON 2016-09-22 07:21:06.507 -0700',
       'Autumn + 1/16ths. 16TH 2016-10-14 18:26:52.343 -0700',
       'Autumn + 2/16ths. HALF 2016-11-06 04:32:38.179 -0800',
       'Autumn + 3/16ths. 16TH 2016-11-28 15:38:24.015 -0800' ] },
  { season: 'Winter 2016',
    segments:
     [ 'Winter + 0/16ths. SEASON 2016-12-21 02:44:09.851 -0800',
       'Winter + 1/16ths. 16TH 2017-01-12 08:40:16.639 -0800',
       'Winter + 2/16ths. HALF 2017-02-03 14:36:23.427 -0800',
       'Winter + 3/16ths. 16TH 2017-02-25 20:32:30.215 -0800' ] },
  { season: 'Spring 2017',
    segments:
     [ 'Spring + 0/16ths. SEASON 2017-03-20 03:28:37.004 -0700',
       'Spring + 1/16ths. 16TH 2017-04-12 07:57:29.716 -0700',
       'Spring + 2/16ths. HALF 2017-05-05 12:26:22.428 -0700',
       'Spring + 3/16ths. 16TH 2017-05-28 16:55:15.140 -0700' ] },
  { season: 'Summer 2017',
    segments:
     [ 'Summer + 0/16ths. SEASON 2017-06-20 21:24:07.853 -0700',
       'Summer + 1/16ths. 16TH 2017-07-14 07:18:32.226 -0700',
       'Summer + 2/16ths. HALF 2017-08-06 17:12:56.599 -0700',
       'Summer + 3/16ths. 16TH 2017-08-30 03:07:20.972 -0700' ] },
  { season: 'Autumn 2017',
    segments:
     [ 'Autumn + 0/16ths. SEASON 2017-09-22 13:01:45.345 -0700',
       'Autumn + 1/16ths. 16TH 2017-10-15 00:08:17.585 -0700',
       'Autumn + 2/16ths. HALF 2017-11-06 10:14:49.825 -0800',
       'Autumn + 3/16ths. 16TH 2017-11-28 21:21:22.065 -0800' ] },
  { season: 'Winter 2017',
    segments:
     [ 'Winter + 0/16ths. SEASON 2017-12-21 08:27:54.306 -0800',
       'Winter + 1/16ths. 16TH 2018-01-12 14:24:46.923 -0800',
       'Winter + 2/16ths. HALF 2018-02-03 20:21:39.541 -0800',
       'Winter + 3/16ths. 16TH 2018-02-26 02:18:32.158 -0800' ] },
  { season: 'Spring 2018',
    segments:
     [ 'Spring + 0/16ths. SEASON 2018-03-20 09:15:24.776 -0700',
       'Spring + 1/16ths. 16TH 2018-04-12 13:43:22.368 -0700',
       'Spring + 2/16ths. HALF 2018-05-05 18:11:19.961 -0700',
       'Spring + 3/16ths. 16TH 2018-05-28 22:39:17.553 -0700' ] },
  { season: 'Summer 2018',
    segments:
     [ 'Summer + 0/16ths. SEASON 2018-06-21 03:07:15.146 -0700',
       'Summer + 1/16ths. 16TH 2018-07-14 13:03:57.074 -0700',
       'Summer + 2/16ths. HALF 2018-08-06 23:00:39.002 -0700',
       'Summer + 3/16ths. 16TH 2018-08-30 08:57:20.930 -0700' ] },
  { season: 'Autumn 2018',
    segments:
     [ 'Autumn + 0/16ths. SEASON 2018-09-22 18:54:02.859 -0700',
       'Autumn + 1/16ths. 16TH 2018-10-15 06:01:12.504 -0700',
       'Autumn + 2/16ths. HALF 2018-11-06 16:08:22.149 -0800',
       'Autumn + 3/16ths. 16TH 2018-11-29 03:15:31.794 -0800' ] },
  { season: 'Winter 2018',
    segments:
     [ 'Winter + 0/16ths. SEASON 2018-12-21 14:22:41.440 -0800',
       'Winter + 1/16ths. 16TH 2019-01-12 20:16:36.871 -0800',
       'Winter + 2/16ths. HALF 2019-02-04 02:10:32.303 -0800',
       'Winter + 3/16ths. 16TH 2019-02-26 08:04:27.734 -0800' ] },
  { season: 'Spring 2019',
    segments:
     [ 'Spring + 0/16ths. SEASON 2019-03-20 14:58:23.166 -0700',
       'Spring + 1/16ths. 16TH 2019-04-12 19:27:20.337 -0700',
       'Spring + 2/16ths. HALF 2019-05-05 23:56:17.508 -0700',
       'Spring + 3/16ths. 16TH 2019-05-29 04:25:14.679 -0700' ] },
  { season: 'Summer 2019',
    segments:
     [ 'Summer + 0/16ths. SEASON 2019-06-21 08:54:11.851 -0700',
       'Summer + 1/16ths. 16TH 2019-07-14 21:53:10.582 -0700',
       'Summer + 2/16ths. HALF 2019-08-07 10:52:09.313 -0700',
       'Summer + 3/16ths. 16TH 2019-08-30 23:51:08.044 -0700' ] },
  { season: 'Autumn 2019',
    segments:
     [ 'Autumn + 0/16ths. SEASON 2019-09-23 12:50:06.775 -0700',
       'Autumn + 1/16ths. 16TH 2019-10-15 20:57:25.692 -0700',
       'Autumn + 2/16ths. HALF 2019-11-07 04:04:44.610 -0800',
       'Autumn + 3/16ths. 16TH 2019-11-29 12:12:03.528 -0800' ] },
  { season: 'Winter 2019',
    segments:
     [ 'Winter + 0/16ths. SEASON 2019-12-21 20:19:22.446 -0800',
       'Winter + 1/16ths. 16TH 2020-01-13 02:11:55.187 -0800',
       'Winter + 2/16ths. HALF 2020-02-04 08:04:27.928 -0800',
       'Winter + 3/16ths. 16TH 2020-02-26 13:57:00.669 -0800' ] },
  { season: 'Spring 2020',
    segments:
     [ 'Spring + 0/16ths. SEASON 2020-03-19 20:49:33.410 -0700',
       'Spring + 1/16ths. 16TH 2020-04-12 01:18:04.244 -0700',
       'Spring + 2/16ths. HALF 2020-05-05 05:46:35.078 -0700',
       'Spring + 3/16ths. 16TH 2020-05-28 10:15:05.912 -0700' ] },
  { season: 'Summer 2020',
    segments:
     [ 'Summer + 0/16ths. SEASON 2020-06-20 14:43:36.747 -0700',
       'Summer + 1/16ths. 16TH 2020-07-14 00:40:21.307 -0700',
       'Summer + 2/16ths. HALF 2020-08-06 10:37:05.867 -0700',
       'Summer + 3/16ths. 16TH 2020-08-29 20:33:50.427 -0700' ] },
  { season: 'Autumn 2020',
    segments:
     [ 'Autumn + 0/16ths. SEASON 2020-09-22 06:30:34.987 -0700',
       'Autumn + 1/16ths. 16TH 2020-10-14 17:38:30.307 -0700',
       'Autumn + 2/16ths. HALF 2020-11-06 03:46:25.627 -0800',
       'Autumn + 3/16ths. 16TH 2020-11-28 14:54:20.947 -0800' ] },
  { season: 'Winter 2020',
    segments:
     [ 'Winter + 0/16ths. SEASON 2020-12-21 02:02:16.268 -0800',
       'Winter + 1/16ths. 16TH 2021-01-12 07:56:03.274 -0800',
       'Winter + 2/16ths. HALF 2021-02-03 13:49:50.281 -0800',
       'Winter + 3/16ths. 16TH 2021-02-25 19:43:37.287 -0800' ] },
  { season: 'Spring 2021',
    segments:
     [ 'Spring + 0/16ths. SEASON 2021-03-20 02:37:24.294 -0700',
       'Spring + 1/16ths. 16TH 2021-04-12 07:06:04.594 -0700',
       'Spring + 2/16ths. HALF 2021-05-05 11:34:44.894 -0700',
       'Spring + 3/16ths. 16TH 2021-05-28 16:03:25.194 -0700' ] },
  { season: 'Summer 2021',
    segments:
     [ 'Summer + 0/16ths. SEASON 2021-06-20 20:32:05.495 -0700',
       'Summer + 1/16ths. 16TH 2021-07-14 06:29:19.335 -0700',
       'Summer + 2/16ths. HALF 2021-08-06 16:26:33.175 -0700',
       'Summer + 3/16ths. 16TH 2021-08-30 02:23:47.015 -0700' ] },
  { season: 'Autumn 2021',
    segments:
     [ 'Autumn + 0/16ths. SEASON 2021-09-22 12:21:00.855 -0700',
       'Autumn + 1/16ths. 16TH 2021-10-14 23:30:34.107 -0700',
       'Autumn + 2/16ths. HALF 2021-11-06 10:40:07.359 -0700',
       'Autumn + 3/16ths. 16TH 2021-11-28 20:49:40.611 -0800' ] },
  { season: 'Winter 2021',
    segments:
     [ 'Winter + 0/16ths. SEASON 2021-12-21 07:59:13.863 -0800',
       'Winter + 1/16ths. 16TH 2022-01-12 13:52:45.502 -0800',
       'Winter + 2/16ths. HALF 2022-02-03 19:46:17.141 -0800',
       'Winter + 3/16ths. 16TH 2022-02-26 01:39:48.780 -0800' ] },
  { season: 'Spring 2022',
    segments:
     [ 'Spring + 0/16ths. SEASON 2022-03-20 08:33:20.419 -0700',
       'Spring + 1/16ths. 16TH 2022-04-12 12:58:26.833 -0700',
       'Spring + 2/16ths. HALF 2022-05-05 17:23:33.247 -0700',
       'Spring + 3/16ths. 16TH 2022-05-28 21:48:39.661 -0700' ] },
  { season: 'Summer 2022',
    segments:
     [ 'Summer + 0/16ths. SEASON 2022-06-21 02:13:46.075 -0700',
       'Summer + 1/16ths. 16TH 2022-07-14 12:11:13.717 -0700',
       'Summer + 2/16ths. HALF 2022-08-06 22:08:41.360 -0700',
       'Summer + 3/16ths. 16TH 2022-08-30 08:06:09.003 -0700' ] },
  { season: 'Autumn 2022',
    segments:
     [ 'Autumn + 0/16ths. SEASON 2022-09-22 18:03:36.646 -0700',
       'Autumn + 1/16ths. 16TH 2022-10-15 05:14:44.371 -0700',
       'Autumn + 2/16ths. HALF 2022-11-06 15:25:52.096 -0800',
       'Autumn + 3/16ths. 16TH 2022-11-29 02:36:59.821 -0800' ] },
  { season: 'Winter 2022',
    segments:
     [ 'Winter + 0/16ths. SEASON 2022-12-21 13:48:07.546 -0800',
       'Winter + 1/16ths. 16TH 2023-01-12 19:42:10.892 -0800',
       'Winter + 2/16ths. HALF 2023-02-04 01:36:14.239 -0800',
       'Winter + 3/16ths. 16TH 2023-02-26 07:30:17.585 -0800' ] },
  { season: 'Spring 2023',
    segments:
     [ 'Spring + 0/16ths. SEASON 2023-03-20 14:24:20.932 -0700',
       'Spring + 1/16ths. 16TH 2023-04-12 18:47:41.689 -0700',
       'Spring + 2/16ths. HALF 2023-05-05 23:11:02.447 -0700',
       'Spring + 3/16ths. 16TH 2023-05-29 03:34:23.205 -0700' ] },
  { season: 'Summer 2023',
    segments:
     [ 'Summer + 0/16ths. SEASON 2023-06-21 07:57:43.963 -0700',
       'Summer + 1/16ths. 16TH 2023-07-14 17:55:46.358 -0700',
       'Summer + 2/16ths. HALF 2023-08-07 03:53:48.754 -0700',
       'Summer + 3/16ths. 16TH 2023-08-30 13:51:51.150 -0700' ] },
  { season: 'Autumn 2023',
    segments:
     [ 'Autumn + 0/16ths. SEASON 2023-09-22 23:49:53.546 -0700',
       'Autumn + 1/16ths. 16TH 2023-10-15 10:59:14.192 -0700',
       'Autumn + 2/16ths. HALF 2023-11-06 21:08:34.838 -0800',
       'Autumn + 3/16ths. 16TH 2023-11-29 08:17:55.484 -0800' ] },
  { season: 'Winter 2023',
    segments:
     [ 'Winter + 0/16ths. SEASON 2023-12-21 19:27:16.131 -0800',
       'Winter + 1/16ths. 16TH 2024-01-13 01:22:01.665 -0800',
       'Winter + 2/16ths. HALF 2024-02-04 07:16:47.200 -0800',
       'Winter + 3/16ths. 16TH 2024-02-26 13:11:32.734 -0800' ] },
  { season: 'Spring 2024',
    segments:
     [ 'Spring + 0/16ths. SEASON 2024-03-19 20:06:18.269 -0700',
       'Spring + 1/16ths. 16TH 2024-04-12 00:32:27.148 -0700',
       'Spring + 2/16ths. HALF 2024-05-05 04:58:36.027 -0700',
       'Spring + 3/16ths. 16TH 2024-05-28 09:24:44.906 -0700' ] },
  { season: 'Summer 2024',
    segments:
     [ 'Summer + 0/16ths. SEASON 2024-06-20 13:50:53.786 -0700',
       'Summer + 1/16ths. 16TH 2024-07-13 23:49:03.615 -0700',
       'Summer + 2/16ths. HALF 2024-08-06 09:47:13.444 -0700',
       'Summer + 3/16ths. 16TH 2024-08-29 19:45:23.273 -0700' ] },
  { season: 'Autumn 2024',
    segments:
     [ 'Autumn + 0/16ths. SEASON 2024-09-22 05:43:33.103 -0700',
       'Autumn + 1/16ths. 16TH 2024-10-14 16:52:46.763 -0700',
       'Autumn + 2/16ths. HALF 2024-11-06 03:02:00.424 -0800',
       'Autumn + 3/16ths. 16TH 2024-11-28 14:11:14.085 -0800' ] },
  { season: 'Winter 2024',
    segments:
     [ 'Winter + 0/16ths. SEASON 2024-12-21 01:20:27.746 -0800',
       'Winter + 1/16ths. 16TH 2025-01-12 07:15:41.418 -0800',
       'Winter + 2/16ths. HALF 2025-02-03 13:10:55.090 -0800',
       'Winter + 3/16ths. 16TH 2025-02-25 19:06:08.762 -0800' ] },
  { season: 'Spring 2025',
    segments:
     [ 'Spring + 0/16ths. SEASON 2025-03-20 02:01:22.434 -0700',
       'Spring + 1/16ths. 16TH 2025-04-12 06:26:33.990 -0700',
       'Spring + 2/16ths. HALF 2025-05-05 10:51:45.546 -0700',
       'Spring + 3/16ths. 16TH 2025-05-28 15:16:57.102 -0700' ] },
  { season: 'Summer 2025',
    segments:
     [ 'Summer + 0/16ths. SEASON 2025-06-20 19:42:08.658 -0700',
       'Summer + 1/16ths. 16TH 2025-07-14 05:36:24.768 -0700',
       'Summer + 2/16ths. HALF 2025-08-06 15:30:40.878 -0700',
       'Summer + 3/16ths. 16TH 2025-08-30 01:24:56.988 -0700' ] },
  { season: 'Autumn 2025',
    segments:
     [ 'Autumn + 0/16ths. SEASON 2025-09-22 11:19:13.099 -0700',
       'Autumn + 1/16ths. 16TH 2025-10-14 22:30:09.273 -0700',
       'Autumn + 2/16ths. HALF 2025-11-06 08:41:05.447 -0800',
       'Autumn + 3/16ths. 16TH 2025-11-28 19:52:01.621 -0800' ] } ]
[Finished in 0.133s]
```