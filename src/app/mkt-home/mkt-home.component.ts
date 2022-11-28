import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-mkt-home',
  templateUrl: './mkt-home.component.html',
  styleUrls: ['./mkt-home.component.css']
})
export class MKTHomeComponent implements OnInit {

  allUsers!: User;
  chThumb!:string;
  chID!:string;
  chTitle!:string;


  constructor(private service:ServiceService) { }

    chDetailsResponse_:any = {
      "kind": "youtube#searchListResponse",
      "etag": "OXmjnfxgCVov6qM38tgEU9mcm3A",
      "nextPageToken": "CBkQAA",
      "regionCode": "IN",
      "pageInfo": {
        "totalResults": 4325,
        "resultsPerPage": 25
      },
      "items": [
        {
          "kind": "youtube#searchResult",
          "etag": "-wPNuwmvw3-6u-zR325C-dlGH0I",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw"
          },
          "snippet": {
            "publishedAt": "2017-07-10T16:44:46Z",
            "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw",
            "title": "Bollywood pe Charcha",
            "description": "Welcome to ''Bollywood Pe Charcha'' channel, your #1 destination for the best videos from the world of entertainment. Bollywood ...",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/O5GdWN32IW9-xrtq-3kQQdBIToYjH2UvXbZ2gkz6V9bofOtyzUy6HXkUt83SuSSbMuQ5iCUb=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/O5GdWN32IW9-xrtq-3kQQdBIToYjH2UvXbZ2gkz6V9bofOtyzUy6HXkUt83SuSSbMuQ5iCUb=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/O5GdWN32IW9-xrtq-3kQQdBIToYjH2UvXbZ2gkz6V9bofOtyzUy6HXkUt83SuSSbMuQ5iCUb=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood pe Charcha",
            "liveBroadcastContent": "upcoming",
            "publishTime": "2017-07-10T16:44:46Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "wCmVjqO55QRbnLGe4XwqiIwN_dQ",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCQnebsYVDBsivMeTcz2L3Jw"
          },
          "snippet": {
            "publishedAt": "2022-06-23T04:27:04Z",
            "channelId": "UCQnebsYVDBsivMeTcz2L3Jw",
            "title": "Charcha Bollywood pe",
            "description": "Hi guys this channel all about Bollywood news.. so keep supporting ..",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/3Bm81_1KJ6JxzrhFeKP1-_Iv2x4pugMVb6HtAog2VDFz8buUcwNFexihJ9gR1euU-0d56IrYTg=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/3Bm81_1KJ6JxzrhFeKP1-_Iv2x4pugMVb6HtAog2VDFz8buUcwNFexihJ9gR1euU-0d56IrYTg=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/3Bm81_1KJ6JxzrhFeKP1-_Iv2x4pugMVb6HtAog2VDFz8buUcwNFexihJ9gR1euU-0d56IrYTg=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Charcha Bollywood pe",
            "liveBroadcastContent": "none",
            "publishTime": "2022-06-23T04:27:04Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "48YnOJ_BrXsqP0PijjgEfZJoSP4",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCC43_GdKm_SWkQUXqXb7dcQ"
          },
          "snippet": {
            "publishedAt": "2019-01-25T03:05:56Z",
            "channelId": "UCC43_GdKm_SWkQUXqXb7dcQ",
            "title": "Bollywood Pe Charcha",
            "description": "Welcome to\"Bollywood pe charcha\" channel, your#1destination for the best video from the world of entertainment.",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/HHIrqQcm4Yl80Q7ZcAnTeltb2zRO4vkEpCEcLVg07fENiciXDob3dKv2GrC0rYa4MxyT6oU05fo=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/HHIrqQcm4Yl80Q7ZcAnTeltb2zRO4vkEpCEcLVg07fENiciXDob3dKv2GrC0rYa4MxyT6oU05fo=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/HHIrqQcm4Yl80Q7ZcAnTeltb2zRO4vkEpCEcLVg07fENiciXDob3dKv2GrC0rYa4MxyT6oU05fo=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood Pe Charcha",
            "liveBroadcastContent": "upcoming",
            "publishTime": "2019-01-25T03:05:56Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "-9OKSjZWHOql8gGeWo2BaXSKH2Q",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UC5dV342epGMq-iyH_QFRs9A"
          },
          "snippet": {
            "publishedAt": "2022-08-15T01:35:28Z",
            "channelId": "UC5dV342epGMq-iyH_QFRs9A",
            "title": "Bollywood pe Charcha",
            "description": "",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/KOs8B7eIPKLibn8-mOud8rUdDdYmjuL35E_AB4XDSGRMzNiIEbKbXaG4rl8EwrNcz_Z54CT3-Ik=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/KOs8B7eIPKLibn8-mOud8rUdDdYmjuL35E_AB4XDSGRMzNiIEbKbXaG4rl8EwrNcz_Z54CT3-Ik=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/KOs8B7eIPKLibn8-mOud8rUdDdYmjuL35E_AB4XDSGRMzNiIEbKbXaG4rl8EwrNcz_Z54CT3-Ik=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood pe Charcha",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-15T01:35:28Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "28ox8mCdKBip7g_8rZi-gVyFQT8",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCLD4jYLW058MkQFVPROPB6g"
          },
          "snippet": {
            "publishedAt": "2020-04-27T04:11:35Z",
            "channelId": "UCLD4jYLW058MkQFVPROPB6g",
            "title": "BOLLYWOOD PE CHARCHA",
            "description": "",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/nquZyqmQfXHFXrFDNrFjJaNVmJE9M9CtzjHrh6t4c_g-LZZqRUJ8nylqYlyfXliy1_W-VhOx=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/nquZyqmQfXHFXrFDNrFjJaNVmJE9M9CtzjHrh6t4c_g-LZZqRUJ8nylqYlyfXliy1_W-VhOx=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/nquZyqmQfXHFXrFDNrFjJaNVmJE9M9CtzjHrh6t4c_g-LZZqRUJ8nylqYlyfXliy1_W-VhOx=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "BOLLYWOOD PE CHARCHA",
            "liveBroadcastContent": "none",
            "publishTime": "2020-04-27T04:11:35Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "CV3aXB1UvsatQp4vFNWTPgZOmn8",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCEaYFJaKEwb-2IeT3JCArJQ"
          },
          "snippet": {
            "publishedAt": "2022-02-06T08:08:58Z",
            "channelId": "UCEaYFJaKEwb-2IeT3JCArJQ",
            "title": "Bollywood Pe Charcha",
            "description": "",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu_Gg28PYNGGOT8NR-fm-wg9O1AAd51pwOTsvWPkGQTFA05hO6_RpqWzVsS736_k=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu_Gg28PYNGGOT8NR-fm-wg9O1AAd51pwOTsvWPkGQTFA05hO6_RpqWzVsS736_k=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu_Gg28PYNGGOT8NR-fm-wg9O1AAd51pwOTsvWPkGQTFA05hO6_RpqWzVsS736_k=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood Pe Charcha",
            "liveBroadcastContent": "none",
            "publishTime": "2022-02-06T08:08:58Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "kM4EePLNy5Y5zEX1BtMBWVyF0Ak",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCxF7tfnFuvc8pj_kPQs1fig"
          },
          "snippet": {
            "publishedAt": "2022-05-27T05:48:57Z",
            "channelId": "UCxF7tfnFuvc8pj_kPQs1fig",
            "title": "Bollywood pe charcha short",
            "description": "Bollywood pe charcha short SUBSCRIBE MY CHANNEL Gmail Kpooja8778@gmali.com Bollywood pe charcha short ...",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/DGqGh1ODh_OZPXWG5rY5anUQlvYiV5jUNvqgTmsIf1Gibbpyhpt694JDVLNmoovzBExEIKNU9A=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/DGqGh1ODh_OZPXWG5rY5anUQlvYiV5jUNvqgTmsIf1Gibbpyhpt694JDVLNmoovzBExEIKNU9A=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/DGqGh1ODh_OZPXWG5rY5anUQlvYiV5jUNvqgTmsIf1Gibbpyhpt694JDVLNmoovzBExEIKNU9A=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood pe charcha short",
            "liveBroadcastContent": "none",
            "publishTime": "2022-05-27T05:48:57Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "-a9K72E8-NJ5KZs72kjtSzTLOmQ",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCjg7yb86aXVhMQIJuLu_pLA"
          },
          "snippet": {
            "publishedAt": "2022-09-18T18:22:49Z",
            "channelId": "UCjg7yb86aXVhMQIJuLu_pLA",
            "title": "Bollywood pe charcha AK",
            "description": "For Bollywood update movie review and status.",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu8sf_qvnfb8QK3g7WwsCwjpbviDEY-eqANi_JQ4dnc9MpY5J0TAHUAnCJHXxrcQ=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu8sf_qvnfb8QK3g7WwsCwjpbviDEY-eqANi_JQ4dnc9MpY5J0TAHUAnCJHXxrcQ=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu8sf_qvnfb8QK3g7WwsCwjpbviDEY-eqANi_JQ4dnc9MpY5J0TAHUAnCJHXxrcQ=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood pe charcha AK",
            "liveBroadcastContent": "none",
            "publishTime": "2022-09-18T18:22:49Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "H6RI2RsZUkDBv7p3S5ofPTojNmQ",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCxXEFKvCS4LfQ_vg55k5IrQ"
          },
          "snippet": {
            "publishedAt": "2022-04-20T16:14:25Z",
            "channelId": "UCxXEFKvCS4LfQ_vg55k5IrQ",
            "title": "Charcha Bollywood pe",
            "description": "",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/KBcp8Y38ra_NHv5qHThR6jor0N_fPv6jNsxFkptX_Vgodlvbz8rDG_38xa37FR3llfaE0Gd5=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/KBcp8Y38ra_NHv5qHThR6jor0N_fPv6jNsxFkptX_Vgodlvbz8rDG_38xa37FR3llfaE0Gd5=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/KBcp8Y38ra_NHv5qHThR6jor0N_fPv6jNsxFkptX_Vgodlvbz8rDG_38xa37FR3llfaE0Gd5=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Charcha Bollywood pe",
            "liveBroadcastContent": "none",
            "publishTime": "2022-04-20T16:14:25Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "wVZh6Vwn97x_XqMHD3VZVvNZJH4",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCjqjMgUW4eAS1X6S2DIlyiA"
          },
          "snippet": {
            "publishedAt": "2022-03-18T09:23:27Z",
            "channelId": "UCjqjMgUW4eAS1X6S2DIlyiA",
            "title": "Bollywood pe Charcha",
            "description": "",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/g8isDlMkNeN48rbbSYBT7C7-_k-oZw0z74JfaAXSg8lcG_4ZCieRCTyobHMoCW3mm8U9Kfitjg=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/g8isDlMkNeN48rbbSYBT7C7-_k-oZw0z74JfaAXSg8lcG_4ZCieRCTyobHMoCW3mm8U9Kfitjg=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/g8isDlMkNeN48rbbSYBT7C7-_k-oZw0z74JfaAXSg8lcG_4ZCieRCTyobHMoCW3mm8U9Kfitjg=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood pe Charcha",
            "liveBroadcastContent": "none",
            "publishTime": "2022-03-18T09:23:27Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "3dsbWBesQy8KqSKG8cwq2TuTYZA",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCWe3y5KW3ipmPPT_Vx2FUKw"
          },
          "snippet": {
            "publishedAt": "2022-03-15T14:17:58Z",
            "channelId": "UCWe3y5KW3ipmPPT_Vx2FUKw",
            "title": "Bollywood pe charcha",
            "description": "",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/lR4UQ1CmN8VjgqssXBvuicdCA5z4WbjxmSfAC1HhsPZeVyFyoyDJ4P12NmpheMNCsGP9SCrNqQ=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/lR4UQ1CmN8VjgqssXBvuicdCA5z4WbjxmSfAC1HhsPZeVyFyoyDJ4P12NmpheMNCsGP9SCrNqQ=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/lR4UQ1CmN8VjgqssXBvuicdCA5z4WbjxmSfAC1HhsPZeVyFyoyDJ4P12NmpheMNCsGP9SCrNqQ=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood pe charcha",
            "liveBroadcastContent": "none",
            "publishTime": "2022-03-15T14:17:58Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "2dzBLbTxxHZBvJt-Z7dIzyrD4iI",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCACXyCNv4MMd9NGBtKrjmMw"
          },
          "snippet": {
            "publishedAt": "2019-02-22T15:46:28Z",
            "channelId": "UCACXyCNv4MMd9NGBtKrjmMw",
            "title": "Bollywood Fatafat",
            "description": "Welcome to ''Bollywood Fatafat'' channel, your #1 destination for the best videos from the world of entertainment. Bollywood ...",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/XNNXrsLzxLaT-vBSZ5leDxz02uOg4N5a1rFoB6IOL_al8jgEVorE2HvLSnQNn2HNVZIvwpIHYw=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/XNNXrsLzxLaT-vBSZ5leDxz02uOg4N5a1rFoB6IOL_al8jgEVorE2HvLSnQNn2HNVZIvwpIHYw=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/XNNXrsLzxLaT-vBSZ5leDxz02uOg4N5a1rFoB6IOL_al8jgEVorE2HvLSnQNn2HNVZIvwpIHYw=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood Fatafat",
            "liveBroadcastContent": "upcoming",
            "publishTime": "2019-02-22T15:46:28Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "-5Osvgv0Twpgh6_9uyg-2sNKvKI",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCNUZOdVkJmrIJKc-YW557IQ"
          },
          "snippet": {
            "publishedAt": "2021-09-28T09:39:04Z",
            "channelId": "UCNUZOdVkJmrIJKc-YW557IQ",
            "title": "Bollywood pe charcha Garam",
            "description": "Bollywood pe charcha.",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/VAthBcANi1NT5HE4_IMSvUY-0PhxkToIcie6l-AuzTPBg24odBiR-hgAnDcgY7Py_c6Oh5GkwaU=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/VAthBcANi1NT5HE4_IMSvUY-0PhxkToIcie6l-AuzTPBg24odBiR-hgAnDcgY7Py_c6Oh5GkwaU=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/VAthBcANi1NT5HE4_IMSvUY-0PhxkToIcie6l-AuzTPBg24odBiR-hgAnDcgY7Py_c6Oh5GkwaU=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood pe charcha Garam",
            "liveBroadcastContent": "none",
            "publishTime": "2021-09-28T09:39:04Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "kUFESqRZ_PJWrwSuFm8Y1KDIBd8",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UC3t4DBaHtNHF6gRQGK7t2nQ"
          },
          "snippet": {
            "publishedAt": "2015-01-03T18:39:45Z",
            "channelId": "UC3t4DBaHtNHF6gRQGK7t2nQ",
            "title": "Charcha with bhurani",
            "description": "Hey frnds welcome to our(mine+yours) channel \"CHARCHA WITH BHURANI\". Here We do Reviews Of Movies, Songs, Trailers ...",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu9xDhRQDT7148To0f00VwrvSxVvnMvtKh84nri6DkY=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu9xDhRQDT7148To0f00VwrvSxVvnMvtKh84nri6DkY=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu9xDhRQDT7148To0f00VwrvSxVvnMvtKh84nri6DkY=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Charcha with bhurani",
            "liveBroadcastContent": "upcoming",
            "publishTime": "2015-01-03T18:39:45Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "pPo26KSAFj_a5-HP8yEAokOTb20",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCT2ZYCgEVn7rGJmEa9bq16g"
          },
          "snippet": {
            "publishedAt": "2022-03-31T18:53:42Z",
            "channelId": "UCT2ZYCgEVn7rGJmEa9bq16g",
            "title": "Tollywood pe Charcha",
            "description": "The main priority of our channel tollywood pe Charcha is to bring you people every update related to real events. Celebrities ...",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/tBraKp0aPsZGAz1UhZcfQfjVN0HlCG2X6Z-qTJd0xofGwlNM0ii5a4v8NJYcYswkhYNO1Teg7Q=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/tBraKp0aPsZGAz1UhZcfQfjVN0HlCG2X6Z-qTJd0xofGwlNM0ii5a4v8NJYcYswkhYNO1Teg7Q=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/tBraKp0aPsZGAz1UhZcfQfjVN0HlCG2X6Z-qTJd0xofGwlNM0ii5a4v8NJYcYswkhYNO1Teg7Q=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Tollywood pe Charcha",
            "liveBroadcastContent": "none",
            "publishTime": "2022-03-31T18:53:42Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "-te-70wJ3Q3sbLg_-ttdOyVst0w",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCsnTQZ_X26uNGBRt86m98DQ"
          },
          "snippet": {
            "publishedAt": "2022-02-20T12:09:42Z",
            "channelId": "UCsnTQZ_X26uNGBRt86m98DQ",
            "title": "Bollywood industry pe Charcha",
            "description": "",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu9d1Mx6IHh40gSdOz_FCLGs5C0pB-Al-jFOAXrFBo0YblVklxzgkRQMBd3vUUnC=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu9d1Mx6IHh40gSdOz_FCLGs5C0pB-Al-jFOAXrFBo0YblVklxzgkRQMBd3vUUnC=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu9d1Mx6IHh40gSdOz_FCLGs5C0pB-Al-jFOAXrFBo0YblVklxzgkRQMBd3vUUnC=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood industry pe Charcha",
            "liveBroadcastContent": "none",
            "publishTime": "2022-02-20T12:09:42Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "LrrtPsadY0QsCxPzlhsQm-zQK3I",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCJadoZxIzfd3dP1e0Bp_BKQ"
          },
          "snippet": {
            "publishedAt": "2020-06-25T06:23:25Z",
            "channelId": "UCJadoZxIzfd3dP1e0Bp_BKQ",
            "title": "Entertainment Pe Charcha",
            "description": "Hello Eveyone Welcome to Our Channel \"Entertainment Pe Charcha\" U will get all the Updates About Entertainment Industry ...",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu-H45-K8RhK082pxdeRo9o7er_lm1rhtj4aIvN9=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu-H45-K8RhK082pxdeRo9o7er_lm1rhtj4aIvN9=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/ytc/AMLnZu-H45-K8RhK082pxdeRo9o7er_lm1rhtj4aIvN9=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Entertainment Pe Charcha",
            "liveBroadcastContent": "upcoming",
            "publishTime": "2020-06-25T06:23:25Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "9yHkFfob34pN_c8p8-RaodR1f-s",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCWNTLYkSAlx65Mc6OdfXysg"
          },
          "snippet": {
            "publishedAt": "2016-11-14T12:08:29Z",
            "channelId": "UCWNTLYkSAlx65Mc6OdfXysg",
            "title": "Bollywood Masala Tv",
            "description": "Welcome to 'Bollywood Masala tv' channel, your #1 destination for the best videos from the world of entertainment. Bollywood Pe ...",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/8Lt6u0WMmTgThAFuYtI76nuEiKhSy_m01yyIVFWA281ggvRmLd1fsRI_Y9LiN_hBiWckx5Kqpg=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/8Lt6u0WMmTgThAFuYtI76nuEiKhSy_m01yyIVFWA281ggvRmLd1fsRI_Y9LiN_hBiWckx5Kqpg=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/8Lt6u0WMmTgThAFuYtI76nuEiKhSy_m01yyIVFWA281ggvRmLd1fsRI_Y9LiN_hBiWckx5Kqpg=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood Masala Tv",
            "liveBroadcastContent": "upcoming",
            "publishTime": "2016-11-14T12:08:29Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "Opc-URf5ImpRr6_IzHeAGSAsYTQ",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCFAo--Rzpa6dPA45lOU7itw"
          },
          "snippet": {
            "publishedAt": "2021-08-07T01:02:27Z",
            "channelId": "UCFAo--Rzpa6dPA45lOU7itw",
            "title": "Celebrities Pe Charcha",
            "description": "मेरे चैनल में आपका स्वागत है.",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/c-Bp2Pju4AEN7yyIpkuPFvyT3xRidzhOywe0ZdLTCjK9Wxs7JBPiq9v8the9xwD_0ROLhXwTUw=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/c-Bp2Pju4AEN7yyIpkuPFvyT3xRidzhOywe0ZdLTCjK9Wxs7JBPiq9v8the9xwD_0ROLhXwTUw=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/c-Bp2Pju4AEN7yyIpkuPFvyT3xRidzhOywe0ZdLTCjK9Wxs7JBPiq9v8the9xwD_0ROLhXwTUw=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Celebrities Pe Charcha",
            "liveBroadcastContent": "none",
            "publishTime": "2021-08-07T01:02:27Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "0fNGtxpUbT1to246Qv2CBZTB4a8",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCs8zlD2ihxf2gxTT8eIRETw"
          },
          "snippet": {
            "publishedAt": "2017-04-13T13:06:23Z",
            "channelId": "UCs8zlD2ihxf2gxTT8eIRETw",
            "title": "Bollywood ki Charcha",
            "description": "Welcome to ''Bollywood Pe Charcha'' channel, your #1 destination for the best videos from the world of entertainment. Bollywood ...",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/vdKio40SxdDW-Twyc06CusDB7_6PkygxG2qskuveoynvRAsRksnZsHRkjl7CYNWaUnyYfxTsTg=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/vdKio40SxdDW-Twyc06CusDB7_6PkygxG2qskuveoynvRAsRksnZsHRkjl7CYNWaUnyYfxTsTg=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/vdKio40SxdDW-Twyc06CusDB7_6PkygxG2qskuveoynvRAsRksnZsHRkjl7CYNWaUnyYfxTsTg=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood ki Charcha",
            "liveBroadcastContent": "none",
            "publishTime": "2017-04-13T13:06:23Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "cq77ZHCzQ42_KWCcFEE1ndzWpzM",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCOieEDC0-q6wdV2EIv5sbEA"
          },
          "snippet": {
            "publishedAt": "2022-05-28T18:03:29Z",
            "channelId": "UCOieEDC0-q6wdV2EIv5sbEA",
            "title": "Bollywood Magnet",
            "description": "Welcome to our Bollywood Magnet Youtube Channel. In this channel, you will get all kinds of news and updates related to the ...",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/sqVlxBT_yFFwQakioewK_mZ_oRsCGv_poz9y5WRM6L27-UC4TeVsraVAYwCHEdiNrkob8HqTOA=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/sqVlxBT_yFFwQakioewK_mZ_oRsCGv_poz9y5WRM6L27-UC4TeVsraVAYwCHEdiNrkob8HqTOA=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/sqVlxBT_yFFwQakioewK_mZ_oRsCGv_poz9y5WRM6L27-UC4TeVsraVAYwCHEdiNrkob8HqTOA=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Bollywood Magnet",
            "liveBroadcastContent": "none",
            "publishTime": "2022-05-28T18:03:29Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "DKe4TA9on5HOzLcNZjH_KPHikx0",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UC90RMS2GefhjlMfGTbZJnKg"
          },
          "snippet": {
            "publishedAt": "2022-08-09T06:36:24Z",
            "channelId": "UC90RMS2GefhjlMfGTbZJnKg",
            "title": "cinema hai ye 1M view",
            "description": "only entertainment.",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/c-ydo1XHqBZ0loqbHHvgqXnWS0DU0pzR759svjWYuj3uElKuhjzAxSmU-8uFrjkuOR4epYN5sA=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/c-ydo1XHqBZ0loqbHHvgqXnWS0DU0pzR759svjWYuj3uElKuhjzAxSmU-8uFrjkuOR4epYN5sA=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/c-ydo1XHqBZ0loqbHHvgqXnWS0DU0pzR759svjWYuj3uElKuhjzAxSmU-8uFrjkuOR4epYN5sA=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "cinema hai ye 1M view",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-09T06:36:24Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "a2EneupSBkFyVp9Na6YWLRIJSMo",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCl5eDdnhZqXbMPC9UCqtG_g"
          },
          "snippet": {
            "publishedAt": "2021-12-12T15:17:56Z",
            "channelId": "UCl5eDdnhZqXbMPC9UCqtG_g",
            "title": "Filmi NonStop",
            "description": "Welcome to \" FilmiNonStop\" channel , your # 1 destination for the best videos from the world of entertainment . Bollywood Pe ...",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/PwDQJgVM1HnIsFYEA2aB-dNOCwDUVo_bJZ8tvGv1f5yAH11SqouJBGqvLSZj_zsY8-58rtdAFxA=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/PwDQJgVM1HnIsFYEA2aB-dNOCwDUVo_bJZ8tvGv1f5yAH11SqouJBGqvLSZj_zsY8-58rtdAFxA=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/PwDQJgVM1HnIsFYEA2aB-dNOCwDUVo_bJZ8tvGv1f5yAH11SqouJBGqvLSZj_zsY8-58rtdAFxA=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Filmi NonStop",
            "liveBroadcastContent": "none",
            "publishTime": "2021-12-12T15:17:56Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "dlhej1VO7t7CBZ0xVFWBuOihM5U",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCGQGbQ0KeaSL9Pk8Mc-BajA"
          },
          "snippet": {
            "publishedAt": "2022-08-22T06:44:41Z",
            "channelId": "UCGQGbQ0KeaSL9Pk8Mc-BajA",
            "title": "Everything Knowhow",
            "description": "Guys thanks for visit my channel Love you all.",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/ANtjsPxoY7CyIK5C1qGjariQlhcGBOSRO7QjCxAUbVKdTRCD3I6FcnTM7_6x-Ss70ckfJAoY=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/ANtjsPxoY7CyIK5C1qGjariQlhcGBOSRO7QjCxAUbVKdTRCD3I6FcnTM7_6x-Ss70ckfJAoY=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/ANtjsPxoY7CyIK5C1qGjariQlhcGBOSRO7QjCxAUbVKdTRCD3I6FcnTM7_6x-Ss70ckfJAoY=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Everything Knowhow",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-22T06:44:41Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "W3mVne2IKGRlVHQ5uceJ5OUnUyU",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UC4xPOPEnSU34SWCrYziLVaA"
          },
          "snippet": {
            "publishedAt": "2022-01-21T15:30:31Z",
            "channelId": "UC4xPOPEnSU34SWCrYziLVaA",
            "title": "Stars Talk",
            "description": "Welcome to our channel star talk. In this channel we provide content related film & serial industry news & updates.",
            "thumbnails": {
              "default": {
                "url": "https://yt3.ggpht.com/2QiXsudxm3bxhSW88XmzBYIjc81LjkmCoatC9R7YCbNCtp-KW6Q6ohX7t7AoG497X--vB94dKQ=s88-c-k-c0xffffffff-no-rj-mo"
              },
              "medium": {
                "url": "https://yt3.ggpht.com/2QiXsudxm3bxhSW88XmzBYIjc81LjkmCoatC9R7YCbNCtp-KW6Q6ohX7t7AoG497X--vB94dKQ=s240-c-k-c0xffffffff-no-rj-mo"
              },
              "high": {
                "url": "https://yt3.ggpht.com/2QiXsudxm3bxhSW88XmzBYIjc81LjkmCoatC9R7YCbNCtp-KW6Q6ohX7t7AoG497X--vB94dKQ=s800-c-k-c0xffffffff-no-rj-mo"
              }
            },
            "channelTitle": "Stars Talk",
            "liveBroadcastContent": "none",
            "publishTime": "2022-01-21T15:30:31Z"
          }
        }
      ]
    }



  ngOnInit(): void {
    // console.log(this.service.getData());

      this.chDetailsResponse_ = Object.keys(this.chDetailsResponse_).map((e:any)=>this.chDetailsResponse_[e]);
     console.log(this.chDetailsResponse_.length);
     this.chDetailsResponse_ = this.chDetailsResponse_[5];
     console.log(this.chDetailsResponse_);
  }

  showChDetails(thumb:string,channelTitle:string,channelId:string){
      this.chThumb = thumb;
      this.chTitle = channelTitle;
      this.chID = channelId;
  }



}
