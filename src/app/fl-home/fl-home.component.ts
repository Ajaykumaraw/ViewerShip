import { Component, OnInit,Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../model/user';
import { userLoginDetails } from '../model/userLoginDetails';
import { ServiceService } from '../service.service';
import { DialogComponent } from '../dialog/dialog.component';
import { channelListResponse } from '../model/chennelListResponse';
import { GetChannelService } from '../get-channel.service';
import { json } from 'express';
import { loginRequestData } from '../model/loginRequestDetails';
import { sendChDataToServer } from '../model/sendChDataToServer';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DailogDataPass } from '../model/dialogDataPass';
import { error } from '@angular/compiler/src/util';




@Component({
  selector: 'app-fl-home',
  templateUrl: './fl-home.component.html',
  styleUrls: ['./fl-home.component.css']
})


export class FlHomeComponent implements OnInit {

  userLoginD: {Username:string;password:string}[] = [];
  userName:any;
  userChName!:string;
  chName:any;
  email:String = "";
  Value!:String;
  isloggedIn:boolean = true;
  mathingItem!:any;
  isvsible: boolean = false;  //taken to dialog
  ischvsible: boolean = true; //moved to dialog
  hideSearchBtn:boolean = false; //moved to dialog
  channelNames:string[] = ['channel list','channel list','channel list'];
  stringfiedData :any;
  parsedData:any;
  token:string="token";
  tokenSize!:number;
  sendChData:sendChDataToServer= new sendChDataToServer;
  item:boolean=true;
  DialogRef!: MatDialogRef<DialogComponent>;
  fullChData:any;
  DialogData:DailogDataPass = new DailogDataPass;
  stringDAta!:string;
  arrayData!:string[];
  channelId!:string;

  channelList:string[] = ["softwoodcoder","durgasoftsolution","testycodies","easytutorias",
                           "ux trends","soft woodcoder","softsolution"
                          ];
  chResponse!:any[];  //moved to dialog
  chDetailsResponse!:any[];



  arr:Array<string>[]=[];




  activatedroute: any;


  response:any = {
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
    ]}
  
  chDetailsResponse_:any = {  "kind": "youtube#searchListResponse",  "etag": "Ok7MI_02O5hUpcDycl-DDOO1kWs",  "nextPageToken": "CAoQAA",  "regionCode": "IN",  "pageInfo": {    "totalResults": 3641,    "resultsPerPage": 10  },  "items": [    {      "kind": "youtube#searchResult",      "etag": "pXd0UfreNK0dyPFxAa8dZX7wtaA",      "id": {        "kind": "youtube#video",        "videoId": "yCoXKsQ6ixM"      },      "snippet": {        "publishedAt": "2022-11-10T04:44:08Z",        "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw",        "title": "Three Best Friend Of Bollywood Salman Khan, Anupam Kher &amp; Sooraj Barjatya Met And So Fun With Media",        "description": "Three Best Friend Of Bollywood Salman Khan, Anupam Kher & Sooraj Barjatya Met And Fun With Media ...",        "thumbnails": {          "default": {            "url": "https://i.ytimg.com/vi/yCoXKsQ6ixM/default.jpg",            "width": 120,            "height": 90          },          "medium": {            "url": "https://i.ytimg.com/vi/yCoXKsQ6ixM/mqdefault.jpg",            "width": 320,            "height": 180          },          "high": {            "url": "https://i.ytimg.com/vi/yCoXKsQ6ixM/hqdefault.jpg",            "width": 480,            "height": 360          }        },        "channelTitle": "Bollywood pe Charcha",        "liveBroadcastContent": "none",        "publishTime": "2022-11-10T04:44:08Z"      }    },    {      "kind": "youtube#searchResult",      "etag": "3cWD3CbB1zDyzsenLvRPb8fk-5Q",      "id": {        "kind": "youtube#video",        "videoId": "EImr2wcab6Y"      },      "snippet": {        "publishedAt": "2022-11-09T17:06:44Z",        "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw",        "title": "Jaya Bachchan IGNORED Kangana Ranaut When She Did Namaste To Her",        "description": "Jaya Bachchan IGNORED Kangana Ranaut When She Did Namaste To Her ...",        "thumbnails": {          "default": {            "url": "https://i.ytimg.com/vi/EImr2wcab6Y/default.jpg",            "width": 120,            "height": 90          },          "medium": {            "url": "https://i.ytimg.com/vi/EImr2wcab6Y/mqdefault.jpg",            "width": 320,            "height": 180          },          "high": {            "url": "https://i.ytimg.com/vi/EImr2wcab6Y/hqdefault.jpg",            "width": 480,            "height": 360          }        },        "channelTitle": "Bollywood pe Charcha",        "liveBroadcastContent": "none",        "publishTime": "2022-11-09T17:06:44Z"      }    },    {      "kind": "youtube#searchResult",      "etag": "qDj0KXGiF_aAJTv1xj-PyvUz2ho",      "id": {        "kind": "youtube#video",        "videoId": "K_O7cxAWN2g"      },      "snippet": {        "publishedAt": "2022-11-09T14:08:18Z",        "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw",        "title": "What!! Urfi Javed Looks Like Chinese Girl And Wear Again SHOCKING Dress",        "description": "What!! Urfi Javed Looks Like Chinese Girl And Wear Again SHOCKING Dress ...",        "thumbnails": {          "default": {            "url": "https://i.ytimg.com/vi/K_O7cxAWN2g/default.jpg",            "width": 120,            "height": 90          },          "medium": {            "url": "https://i.ytimg.com/vi/K_O7cxAWN2g/mqdefault.jpg",            "width": 320,            "height": 180          },          "high": {            "url": "https://i.ytimg.com/vi/K_O7cxAWN2g/hqdefault.jpg",            "width": 480,            "height": 360          }        },        "channelTitle": "Bollywood pe Charcha",        "liveBroadcastContent": "none",        "publishTime": "2022-11-09T14:08:18Z"      }    },    {      "kind": "youtube#searchResult",      "etag": "qrjD-31BHrMwoJUAex_W6kaDaKs",      "id": {        "kind": "youtube#video",        "videoId": "W4HherAn7LU"      },      "snippet": {        "publishedAt": "2022-11-09T10:19:45Z",        "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw",        "title": "Har Har Shambhu Singer Farmani Naaz&#39;s Brother Arrested In For Stealing And Father Absconded",        "description": "Har Har Shambhu Singer Farmani Naaz's Brother Arrested In For Stealing And Father Absconded ...",        "thumbnails": {          "default": {            "url": "https://i.ytimg.com/vi/W4HherAn7LU/default.jpg",            "width": 120,            "height": 90          },          "medium": {            "url": "https://i.ytimg.com/vi/W4HherAn7LU/mqdefault.jpg",            "width": 320,            "height": 180          },          "high": {            "url": "https://i.ytimg.com/vi/W4HherAn7LU/hqdefault.jpg",            "width": 480,            "height": 360          }        },        "channelTitle": "Bollywood pe Charcha",        "liveBroadcastContent": "none",        "publishTime": "2022-11-09T10:19:45Z"      }    },    {      "kind": "youtube#searchResult",      "etag": "t_9_h5GXHqVJ7ZSXHwRDzB4i8oE",      "id": {        "kind": "youtube#video",        "videoId": "RXsMIJP7usY"      },      "snippet": {        "publishedAt": "2022-11-09T07:59:43Z",        "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw",        "title": "The Kerala Story: 32000 Kerala Women In IS But Congress CM Wants To Ban",        "description": "The Kerala Story: 32000 Kerala Women In IS But Congress CM Wants To ...",        "thumbnails": {          "default": {            "url": "https://i.ytimg.com/vi/RXsMIJP7usY/default.jpg",            "width": 120,            "height": 90          },          "medium": {            "url": "https://i.ytimg.com/vi/RXsMIJP7usY/mqdefault.jpg",            "width": 320,            "height": 180          },          "high": {            "url": "https://i.ytimg.com/vi/RXsMIJP7usY/hqdefault.jpg",            "width": 480,            "height": 360          }        },        "channelTitle": "Bollywood pe Charcha",        "liveBroadcastContent": "none",        "publishTime": "2022-11-09T07:59:43Z"      }    },    {      "kind": "youtube#searchResult",      "etag": "4KGmqyKCWuQXLpC-AIid_r0Wnb0",      "id": {        "kind": "youtube#video",        "videoId": "FifLo5fqfOA"      },      "snippet": {        "publishedAt": "2022-11-09T05:16:12Z",        "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw",        "title": "Sania Mirza &amp; Shoaib Malik DIVORCE Offiicial, Pakistan Cricketer Reportedly Cheated On Her",        "description": "Sania Mirza & Shoaib Malik DIVORCE Offiicial, Pakistan Cricketer Reportedly Cheated On Her ...",        "thumbnails": {          "default": {            "url": "https://i.ytimg.com/vi/FifLo5fqfOA/default.jpg",            "width": 120,            "height": 90          },          "medium": {            "url": "https://i.ytimg.com/vi/FifLo5fqfOA/mqdefault.jpg",            "width": 320,            "height": 180          },          "high": {            "url": "https://i.ytimg.com/vi/FifLo5fqfOA/hqdefault.jpg",            "width": 480,            "height": 360          }        },        "channelTitle": "Bollywood pe Charcha",        "liveBroadcastContent": "none",        "publishTime": "2022-11-09T05:16:12Z"      }    },    {      "kind": "youtube#searchResult",      "etag": "cj5fbczA_mxgeJoT7l4QYjPPQUI",      "id": {        "kind": "youtube#video",        "videoId": "HRYuqz8JQPU"      },      "snippet": {        "publishedAt": "2022-11-09T04:09:59Z",        "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw",        "title": "Most Handsome Actor Emraan Hashmi Spotted With His Wife Parveen Shahani At Bandra",        "description": "Most Handsome Actor Emraan Hashmi Spotted With His Wife Parveen Shahani At Bandra ...",        "thumbnails": {          "default": {            "url": "https://i.ytimg.com/vi/HRYuqz8JQPU/default.jpg",            "width": 120,            "height": 90          },          "medium": {            "url": "https://i.ytimg.com/vi/HRYuqz8JQPU/mqdefault.jpg",            "width": 320,            "height": 180          },          "high": {            "url": "https://i.ytimg.com/vi/HRYuqz8JQPU/hqdefault.jpg",            "width": 480,            "height": 360          }        },        "channelTitle": "Bollywood pe Charcha",        "liveBroadcastContent": "none",        "publishTime": "2022-11-09T04:09:59Z"      }    },    {      "kind": "youtube#searchResult",      "etag": "Tgu2lRgb_JsoeuhrUMIIJoy3q54",      "id": {        "kind": "youtube#video",        "videoId": "1sw7IvW7hFU"      },      "snippet": {        "publishedAt": "2022-11-08T15:51:41Z",        "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw",        "title": "Tiger Shroff Demand Rs. 30 Crore Fees For Screw Dheela, Karan Johar Completely SHOCKED",        "description": "Tiger Shroff Demand Rs. 30 Crore Fees For Screw Dheela, Karan Johar Completely SHOCKED ...",        "thumbnails": {          "default": {            "url": "https://i.ytimg.com/vi/1sw7IvW7hFU/default.jpg",            "width": 120,            "height": 90          },          "medium": {            "url": "https://i.ytimg.com/vi/1sw7IvW7hFU/mqdefault.jpg",            "width": 320,            "height": 180          },          "high": {            "url": "https://i.ytimg.com/vi/1sw7IvW7hFU/hqdefault.jpg",            "width": 480,            "height": 360          }        },        "channelTitle": "Bollywood pe Charcha",        "liveBroadcastContent": "none",        "publishTime": "2022-11-08T15:51:41Z"      }    },    {      "kind": "youtube#searchResult",      "etag": "xTj3s99BIx4dDrrteJ9HfMLht_A",      "id": {        "kind": "youtube#video",        "videoId": "-4Qf46Dbg1U"      },      "snippet": {        "publishedAt": "2022-11-08T12:02:39Z",        "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw",        "title": "💔Old Couple Ajay Devgn With Tabu Reached For Upcoming Movie Drishyam 2 Promotion",        "description": "Old Couple Ajay Devgn With Tabu Reached For Upcoming Movie Drishyam 2 Promotion ...",        "thumbnails": {          "default": {            "url": "https://i.ytimg.com/vi/-4Qf46Dbg1U/default.jpg",            "width": 120,            "height": 90          },          "medium": {            "url": "https://i.ytimg.com/vi/-4Qf46Dbg1U/mqdefault.jpg",            "width": 320,            "height": 180          },          "high": {            "url": "https://i.ytimg.com/vi/-4Qf46Dbg1U/hqdefault.jpg",            "width": 480,            "height": 360          }        },        "channelTitle": "Bollywood pe Charcha",        "liveBroadcastContent": "none",        "publishTime": "2022-11-08T12:02:39Z"      }    },    {      "kind": "youtube#searchResult",      "etag": "0Ga4bAFTPBjX7kTvCDvZdJBihiM",      "id": {        "kind": "youtube#video",        "videoId": "sn5fF2y1yeA"      },      "snippet": {        "publishedAt": "2022-11-08T10:41:47Z",        "channelId": "UC4Eb9Ei-bR8MeQTG2pkwiZw",        "title": "&#39;Picture Kahan Achi Banegi..&#39; Boney Kapoor’s Explosive At Akshay Kumar In Kapil Sharma Show",        "description": "'Picture Kahan Achi Banegi..' Boney Kapoor's Explosive At Akshay Kumar In Kapil Sharma Show ...",        "thumbnails": {          "default": {            "url": "https://i.ytimg.com/vi/sn5fF2y1yeA/default.jpg",            "width": 120,            "height": 90          },          "medium": {            "url": "https://i.ytimg.com/vi/sn5fF2y1yeA/mqdefault.jpg",            "width": 320,            "height": 180          },          "high": {            "url": "https://i.ytimg.com/vi/sn5fF2y1yeA/hqdefault.jpg",            "width": 480,            "height": 360          }        },        "channelTitle": "Bollywood pe Charcha",        "liveBroadcastContent": "none",        "publishTime": "2022-11-08T10:41:47Z"      }    }  ]}

  newChDetailResponse:any  = {
    "userChannelName": "softwoodcoder",
    "channelRequestOutPut":"{  \"kind\": \"youtube#searchListResponse\",  \"etag\": \"cGdBD9ieHCHFHb-dP0925ST-RWs\",  \"nextPageToken\": \"CAoQAA\",  \"regionCode\": \"IN\",  \"pageInfo\": {    \"totalResults\": 87,    \"resultsPerPage\": 10  },  \"items\": [    {      \"kind\": \"youtube#searchResult\",      \"etag\": \"B88UFnYsZVVxVhM6M0Fzx-fjSMc\",      \"id\": {        \"kind\": \"youtube#video\",        \"videoId\": \"Pa8Nb5OkJbk\"      },      \"snippet\": {        \"publishedAt\": \"2022-10-13T07:46:13Z\",        \"channelId\": \"UCMduSI8-aUA0Odv9FnVBaPg\",        \"title\": \"Banquee Financial card service Template Design || Template Design\",        \"description\": \"Banquee Financial card service Template Design || Template Design presenting at \​ @Softwoodcoder.\",        \"thumbnails\": {          \"default\": {            \"url\": \"https://i.ytimg.com/vi/Pa8Nb5OkJbk/default.jpg\",            \"width\": 120,            \"height\": 90          },          \"medium\": {            \"url\": \"https://i.ytimg.com/vi/Pa8Nb5OkJbk/mqdefault.jpg\",            \"width\": 320,            \"height\": 180          },          \"high\": {            \"url\": \"https://i.ytimg.com/vi/Pa8Nb5OkJbk/hqdefault.jpg\",            \"width\": 480,            \"height\": 360          }        },        \"channelTitle\": \"Softwoodcoder\",        \"liveBroadcastContent\": \"none\",        \"publishTime\": \"2022-10-13T07:46:13Z\"      }    },    {      \"kind\": \"youtube#searchResult\",      \"etag\": \"keo5HQ1aNC53v1G3HdTTORwQWp4\",      \"id\": {        \"kind\": \"youtube#video\",        \"videoId\": \"OMxDLXpSvdA\"      },      \"snippet\": {        \"publishedAt\": \"2022-05-08T10:31:49Z\",        \"channelId\": \"UCMduSI8-aUA0Odv9FnVBaPg\",        \"title\": \"Print Table of N Number Series As  N, N*10, N*100\",        \"description\": \"Hey guys, In this video, we'll see to use looping to print the following table of values. N, N*10, N*100, N*1000, and so on... this is ...\",        \"thumbnails\": {          \"default\": {            \"url\": \"https://i.ytimg.com/vi/OMxDLXpSvdA/default.jpg\",            \"width\": 120,            \"height\": 90          },          \"medium\": {            \"url\": \"https://i.ytimg.com/vi/OMxDLXpSvdA/mqdefault.jpg\",            \"width\": 320,            \"height\": 180          },          \"high\": {            \"url\": \"https://i.ytimg.com/vi/OMxDLXpSvdA/hqdefault.jpg\",            \"width\": 480,            \"height\": 360          }        },        \"channelTitle\": \"Softwoodcoder\",        \"liveBroadcastContent\": \"none\",        \"publishTime\": \"2022-05-08T10:31:49Z\"      }    },    {      \"kind\": \"youtube#searchResult\",      \"etag\": \"3X7D0C3V5FUuN9BKqRtqE7JDgjQ\",      \"id\": {        \"kind\": \"youtube#video\",        \"videoId\": \"5YVIm-Mtn38\"      },      \"snippet\": {        \"publishedAt\": \"2022-03-14T09:20:05Z\",        \"channelId\": \"UCMduSI8-aUA0Odv9FnVBaPg\",        \"title\": \"Get Google to Instantly Index Your New Website Page 2022\",        \"description\": \"Get Google to Instantly Index Your New Website with the following method shared in the videos. Let us know how this works for ...\",        \"thumbnails\": {          \"default\": {            \"url\": \"https://i.ytimg.com/vi/5YVIm-Mtn38/default.jpg\",            \"width\": 120,            \"height\": 90          },          \"medium\": {            \"url\": \"https://i.ytimg.com/vi/5YVIm-Mtn38/mqdefault.jpg\",            \"width\": 320,            \"height\": 180          },          \"high\": {            \"url\": \"https://i.ytimg.com/vi/5YVIm-Mtn38/hqdefault.jpg\",            \"width\": 480,            \"height\": 360          }        },        \"channelTitle\": \"Softwoodcoder\",        \"liveBroadcastContent\": \"none\",        \"publishTime\": \"2022-03-14T09:20:05Z\"      }    },    {      \"kind\": \"youtube#searchResult\",      \"etag\": \"2rScflSpywg09TYdq4Btn8VoT5k\",      \"id\": {        \"kind\": \"youtube#video\",        \"videoId\": \"b5Gds1dYaOQ\"      },      \"snippet\": {        \"publishedAt\": \"2022-02-27T09:44:16Z\",        \"channelId\": \"UCMduSI8-aUA0Odv9FnVBaPg\",        \"title\": \"Program: To Print {Z and N} With Numbers Patterns In CPP\",        \"description\": \"Hey friends, In this video, we'll see to make two patterns with a single logic, Normally, Patterns problems look difficult to solve but it ...\",        \"thumbnails\": {          \"default\": {            \"url\": \"https://i.ytimg.com/vi/b5Gds1dYaOQ/default.jpg\",            \"width\": 120,            \"height\": 90          },          \"medium\": {            \"url\": \"https://i.ytimg.com/vi/b5Gds1dYaOQ/mqdefault.jpg\",            \"width\": 320,            \"height\": 180          },          \"high\": {            \"url\": \"https://i.ytimg.com/vi/b5Gds1dYaOQ/hqdefault.jpg\",            \"width\": 480,            \"height\": 360          }        },        \"channelTitle\": \"Softwoodcoder\",        \"liveBroadcastContent\": \"none\",        \"publishTime\": \"2022-02-27T09:44:16Z\"      }    },    {      \"kind\": \"youtube#searchResult\",      \"etag\": \"bDLPG-XEgsDIGgzo8ij8W9cCsRQ\",      \"id\": {        \"kind\": \"youtube#video\",        \"videoId\": \"h3rTCodr5FA\"      },      \"snippet\": {        \"publishedAt\": \"2022-02-06T09:20:41Z\",        \"channelId\": \"UCMduSI8-aUA0Odv9FnVBaPg\",        \"title\": \"Number Pattern Problem In CPP\",        \"description\": \"Hey guys, In this video, we are going to solve a pattern problem that looks quite difficult. but we solve it very easily. if you have a ...\",        \"thumbnails\": {          \"default\": {            \"url\": \"https://i.ytimg.com/vi/h3rTCodr5FA/default.jpg\",            \"width\": 120,            \"height\": 90          },          \"medium\": {            \"url\": \"https://i.ytimg.com/vi/h3rTCodr5FA/mqdefault.jpg\",            \"width\": 320,            \"height\": 180          },          \"high\": {            \"url\": \"https://i.ytimg.com/vi/h3rTCodr5FA/hqdefault.jpg\",            \"width\": 480,            \"height\": 360          }        },        \"channelTitle\": \"Softwoodcoder\",        \"liveBroadcastContent\": \"none\",        \"publishTime\": \"2022-02-06T09:20:41Z\"      }    },    {      \"kind\": \"youtube#searchResult\",      \"etag\": \"WHa7qwOaOgt4Yp3qtcQv80Gq7Tg\",      \"id\": {        \"kind\": \"youtube#video\",        \"videoId\": \"1cEI6jfkEso\"      },      \"snippet\": {        \"publishedAt\": \"2021-12-18T13:19:04Z\",        \"channelId\": \"UCMduSI8-aUA0Odv9FnVBaPg\",        \"title\": \"Best Online Platform To Code C++ to VS code To Android Studio\",        \"description\": \"Hey guys, In this video, we'll see some platforms on which we can code online. These platforms may save you to installation and ...\",        \"thumbnails\": {          \"default\": {            \"url\": \"https://i.ytimg.com/vi/1cEI6jfkEso/default.jpg\",            \"width\": 120,            \"height\": 90          },          \"medium\": {            \"url\": \"https://i.ytimg.com/vi/1cEI6jfkEso/mqdefault.jpg\",            \"width\": 320,            \"height\": 180          },          \"high\": {            \"url\": \"https://i.ytimg.com/vi/1cEI6jfkEso/hqdefault.jpg\",            \"width\": 480,            \"height\": 360          }        },        \"channelTitle\": \"Softwoodcoder\",        \"liveBroadcastContent\": \"none\",        \"publishTime\": \"2021-12-18T13:19:04Z\"      }    },    {      \"kind\": \"youtube#searchResult\",      \"etag\": \"bZ51TOg73AhFAT4nVL1e8eIPbk8\",      \"id\": {        \"kind\": \"youtube#playlist\",        \"playlistId\": \"PLfxwQVt0TUyNgEOFpK5fnvTC4Rokeaqva\"      },      \"snippet\": {        \"publishedAt\": \"2021-09-27T16:55:43Z\",        \"channelId\": \"UCMduSI8-aUA0Odv9FnVBaPg\",        \"title\": \"Interview Questions Practices\",        \"description\": \"\",        \"thumbnails\": {          \"default\": {            \"url\": \"https://i.ytimg.com/vi/YoJwmrvgct0/default.jpg\",            \"width\": 120,            \"height\": 90          },          \"medium\": {            \"url\": \"https://i.ytimg.com/vi/YoJwmrvgct0/mqdefault.jpg\",            \"width\": 320,            \"height\": 180          },          \"high\": {            \"url\": \"https://i.ytimg.com/vi/YoJwmrvgct0/hqdefault.jpg\",            \"width\": 480,            \"height\": 360          }        },        \"channelTitle\": \"Softwoodcoder\",        \"liveBroadcastContent\": \"none\",        \"publishTime\": \"2021-09-27T16:55:43Z\"      }    },    {      \"kind\": \"youtube#searchResult\",      \"etag\": \"2JswWLgeaIcOd9SWMXR0jbCcwtE\",      \"id\": {        \"kind\": \"youtube#video\",        \"videoId\": \"bnGkzt-lavI\"      },      \"snippet\": {        \"publishedAt\": \"2021-09-23T08:14:18Z\",        \"channelId\": \"UCMduSI8-aUA0Odv9FnVBaPg\",        \"title\": \"Javascript Print Pattern Using Any Symbol - Pattern JS\",        \"description\": \"Javascript Print Pattern Using Any Symbol - Pattern JS ====================================== Pattern problems are the ...\",        \"thumbnails\": {          \"default\": {            \"url\": \"https://i.ytimg.com/vi/bnGkzt-lavI/default.jpg\",            \"width\": 120,            \"height\": 90          },          \"medium\": {            \"url\": \"https://i.ytimg.com/vi/bnGkzt-lavI/mqdefault.jpg\",            \"width\": 320,            \"height\": 180          },          \"high\": {            \"url\": \"https://i.ytimg.com/vi/bnGkzt-lavI/hqdefault.jpg\",            \"width\": 480,            \"height\": 360          }        },        \"channelTitle\": \"Softwoodcoder\",        \"liveBroadcastContent\": \"none\",        \"publishTime\": \"2021-09-23T08:14:18Z\"      }    },    {      \"kind\": \"youtube#searchResult\",      \"etag\": \"EVFkgr3tOy2D0QpZxHq4vCHiE_k\",      \"id\": {        \"kind\": \"youtube#video\",        \"videoId\": \"-khDs5rfaCc\"      },      \"snippet\": {        \"publishedAt\": \"2021-09-14T16:43:27Z\",        \"channelId\": \"UCMduSI8-aUA0Odv9FnVBaPg\",        \"title\": \"Add Space Before the Capital Letter In a Space less String - Python\",        \"description\": \"Given a string, the Task is to add a space before the sequencing which begins with a capital letter. The input cases will be as ...\",        \"thumbnails\": {          \"default\": {            \"url\": \"https://i.ytimg.com/vi/-khDs5rfaCc/default.jpg\",            \"width\": 120,            \"height\": 90          },          \"medium\": {            \"url\": \"https://i.ytimg.com/vi/-khDs5rfaCc/mqdefault.jpg\",            \"width\": 320,            \"height\": 180          },          \"high\": {            \"url\": \"https://i.ytimg.com/vi/-khDs5rfaCc/hqdefault.jpg\",            \"width\": 480,            \"height\": 360          }        },        \"channelTitle\": \"Softwoodcoder\",        \"liveBroadcastContent\": \"none\",        \"publishTime\": \"2021-09-14T16:43:27Z\"      }    },    {      \"kind\": \"youtube#searchResult\",      \"etag\": \"CiYCO2aZHy9FDPtMSX9_wxgVe-0\",      \"id\": {        \"kind\": \"youtube#video\",        \"videoId\": \"CS3Ka3j5_zE\"      },      \"snippet\": {        \"publishedAt\": \"2021-09-10T10:31:03Z\",        \"channelId\": \"UCMduSI8-aUA0Odv9FnVBaPg\",        \"title\": \"Python - Replace first Occurrence Only In a List\",        \"description\": \"Replacing only the first occurrence of elements in the list is one of the common programming problems which we are solving in ...\",        \"thumbnails\": {          \"default\": {            \"url\": \"https://i.ytimg.com/vi/CS3Ka3j5_zE/default.jpg\",            \"width\": 120,            \"height\": 90          },          \"medium\": {            \"url\": \"https://i.ytimg.com/vi/CS3Ka3j5_zE/mqdefault.jpg\",            \"width\": 320,            \"height\": 180          },          \"high\": {            \"url\": \"https://i.ytimg.com/vi/CS3Ka3j5_zE/hqdefault.jpg\",            \"width\": 480,            \"height\": 360          }        },        \"channelTitle\": \"Softwoodcoder\",        \"liveBroadcastContent\": \"none\",        \"publishTime\": \"2021-09-10T10:31:03Z\"      }    }  ]}"
}

  constructor(private service:ServiceService,private userLoginDetail:DataService
      ,private route: Router,private getChService:GetChannelService,
      private LoginRequest:loginRequestData,private dialoge:MatDialog,
      ) {
      console.log("in constructor"+this.userLoginD);
      // this.userChName = "@"+"softwoodcoder";
  
      }

   sendit(value:String){
    
 }

    setSelectedValue(){
      this.userName  = this.mathingItem;
    }
      ngOnInit(): void {
        this.userName =  localStorage.getItem("uName");
        this.token = localStorage.getItem('utoken')+"";
          this.tokenSize = this.token.length;
         // this.userChName = null;
        // alert(this.tokenSize)
        this.fetchChDataOnPageLoad();     
       //this.methodFetchLogin(); // <- Method to fetch token details contieusly
        // if(this.userChName === null || this.userChName === undefined){
         //  this.openDialogNew();  --- > enable this for dialog
        // }
        

        console.log("from fl home"+this.LoginRequest.getToken()+ this.token);
     //   alert("in constructor username"+this.userName);
      // console.log("in oninit getmethod"+this.service.getUserDetails());
  }
  openDialogNew(){
    this.DialogRef = this.dialoge.open(DialogComponent)
      this.DialogRef.afterClosed().subscribe(name => {
          console.log(name);
          this.stringDAta = name;
          this.arrayData = this.stringDAta.split(",");
          console.log(this.arrayData[1]);
         this.userChName = this.arrayData[0];
         this.fullChData = this.arrayData[1];
          this.channelId = this.arrayData[2];

          // arrsignment into chSendData
            this.sendChData.chName = this.userChName;
            this.sendChData.channelId = this.channelId;
            this.sendChData.userName = this.userName;
          
            this.chDetailsResponse = this.fullChData;
            //calling fetch channel data method 
            this.fetchChData(this.sendChData);
          console.log("in fl side : "+this.fullChData+ " "+  this.sendChData.channelId);
      });
    
  }
  
  showPopup(popup:HTMLElement){
    if(popup.className != "popup-box")
    popup.className = "popup-box";
    else popup.className = "visibillity";
  }
  diablepopup(popup:HTMLElement){
    if(popup.className != "popup-box")
    popup.className = "popup-box";
    else popup.className = "visibillity";
  }

  // fetching response
  openDialog(val:string){
   this.getChService.getChlist(val).subscribe(data => {
    console.log(data);
    this.chResponse = Object.keys(data).map((e:any)=> data[e]);
     console.log(this.chResponse.length);
     if(this.chResponse.length == 6){
      this.chResponse = this.chResponse[5];
      console.log(this.chResponse);
     }else if(this.chResponse.length == 5){
      this.chResponse = this.chResponse[4];
      console.log(this.chResponse);
     }
    
   })


    // this.chResponse = Object.keys(this.response).map((e:any)=>this.response[e]);
    // console.log(this.chResponse.length);
    // this.chResponse = this.chResponse[5];
    
    if(this.isvsible == false){
      this.isvsible = true;
    }else this.isvsible = false; 
  }

  //moved to dialog
  showChData(chId:string,chname:string){
    console.log(chId+""+chname+""+this.userName);
    this.sendChData.channelId  = chId;
    this.sendChData.chName = chname;
    this.sendChData.userName = this.userName;

  

      console.log(chId);
      this.chName = chname;
      console.log(chId);
    if(this.ischvsible == false){
      this.ischvsible = true;
      this.isvsible = false;
      this.hideSearchBtn = false;
    }else{ this.ischvsible = false; 
      this.hideSearchBtn = true;
    }

    this.fetchChData(this.sendChData);
  }

  editMethod(){
    if(this.ischvsible == false){
      this.ischvsible = true;
      this.isvsible = false;
      this.hideSearchBtn = false;
    }else{ this.ischvsible = false; 
      this.hideSearchBtn = true;
    }
  }
  //movied to dialog
  fetchChData(chDataObject:sendChDataToServer){
   
    const ch_data = this.newChDetailResponse.channelRequestOutPut;
   // const ch_data = data.channelRequestOutPut;
    console.log(ch_data);
    this.chDetailsResponse = JSON.parse(ch_data).items;
   
    // working code 

    // this.getChService.getSelectedChData(chDataObject,this.token).subscribe(data=>{
    //   console.log(data);
    // this.chDetailsResponse = Object.keys(data).map((e:any)=>data[e]);
    // console.log(this.chDetailsResponse);
    // this.chDetailsResponse = this.chDetailsResponse[5];
    // console.log(this.chDetailsResponse);
    // });  
    // working code 


    //  }),console.error();
  
}
  
  fetchChDataOnPageLoad(){
    // this.getChService.getChDataOnLogin(this.userName,this.token).subscribe(data=>{
    //   console.log(data.status);
    //           this.userChName = data.userChannelName;
    //           const ch_data2 = data.channelRequestOutPut;
    //         this.chDetailsResponse = JSON.parse(ch_data2).items;
            
    // },error =>{
    //   if(error){
    //   // if(error.status === 500){       //if userChannel data not found in database 
    //     this.openDialogNew();         // <-- call the dialog method to store data in database
    //   }
    //   console.log(error);
    // });
    
     // this.getChService.getSelectedChData(this.userName).subscribe(data=>{
   //      console.log(data);
    // send request with username 
        // if(request = !sucessful){
        //       then  openDialogNew();
        // }else{
          this.userChName = this.newChDetailResponse.userChannelName;
          const ch_data2 = this.newChDetailResponse.channelRequestOutPut;
          this.chDetailsResponse = JSON.parse(ch_data2).items;
        // }
    // if data not found then open dialog
    // now channel name and user data is available 
        //request to api to fetch data channel name and channel data )
  }




  // tgMenu(){
  //   if(this.item){
  //     this.item=false;
  //   }else this.item=true;
    
  // }

   methodFetchLogin(){
    setTimeout(this.methodFetchLogin, 5000);
      if(this.tokenSize > 0){
            // if user logged in then do nothing
           }else if( localStorage.getItem("isLoggedIn") === "false" && this.tokenSize<1){
             this.route.navigate(['/login']);
           }

        }
        
}
