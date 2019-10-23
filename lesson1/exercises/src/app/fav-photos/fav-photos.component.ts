import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos!!';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://steamuserimages-a.akamaihd.net/ugc/843716432397066923/5CC83CA2A8E5E146E74DBABA8CDDA1DFAFE4A79B/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true';
  image3 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56ae1e72-557a-4336-8154-96049a4e3ed7/dddzlhm-cb50fac2-76a5-4da4-8cf4-d00abee66065.png/v1/fill/w_1024,h_1203,q_80,strp/tails_by_kaleido_art_dddzlhm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMyIsInBhdGgiOiJcL2ZcLzU2YWUxZTcyLTU1N2EtNDMzNi04MTU0LTk2MDQ5YTRlM2VkN1wvZGRkemxobS1jYjUwZmFjMi03NmE1LTRkYTQtOGNmNC1kMDBhYmVlNjYwNjUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rMdUPVr0JnbZtJhsWUhb57R0xGe-zNZMEi6WAVZeHgo';

  constructor() { }

  ngOnInit() {
  }

}