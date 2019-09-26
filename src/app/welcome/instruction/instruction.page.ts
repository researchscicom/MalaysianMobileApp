import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.page.html',
  styleUrls: ['./instruction.page.scss'],
})
export class InstructionPage implements OnInit {

  constructor(private router: Router, private translate: TranslateService) { }
  public title;
  public description;
  public skip;
  public steps;
  public button;
  public language: string;

  private _translateLanguage(): void {
    this.translate.use(this.language);
    this._initialiseTranslation();
  }
  private _initialiseTranslation(): void {
    setTimeout(() => {
      this.title 			  = this.translate.instant('instructions.title');
      this.description 	= this.translate.instant('instructions.description');
      this.skip 	= this.translate.instant('instructions.skip');
      this.steps 	= this.translate.instant('instructions.steps');
      this.button 	= this.translate.instant('instructions.button');
    }, 250);
  }
  ngOnInit() {
    this.language = localStorage.getItem('language');
    this._translateLanguage();
  }

  nextPage() {
    return this.router.navigateByUrl('dashboard');
  }
  prevPage() {
    return this.router.navigateByUrl('terms');
  }

}
