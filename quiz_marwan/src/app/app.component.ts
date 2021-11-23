import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home' },
    { title: 'Mata Pelajaran', url: '/folder/matakuliah/matakuliah' },
    { title: 'Jadwal', url: '/folder/jadwal/jadwal' },
    { title: 'Nilai', url: '/folder/nilai/nilai' },
    { title: 'Kartu Rancangan Studi', url: '/folder/krs/krs' },
    { title: 'Keuangan', url: '/folder/keuangan/keuangan' },
    { title: 'Profil', url: '/folder/profil/profil' },
    { title: 'Log Out', url: '/login' },
  ];
  constructor() {}
}
