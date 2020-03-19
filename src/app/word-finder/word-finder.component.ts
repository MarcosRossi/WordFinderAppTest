import { Component, OnInit } from "@angular/core";
import { WordFinderService } from "./word-finder.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import { timer } from "rxjs";

@Component({
  selector: "app-word-finder",
  templateUrl: "./word-finder.component.html",
  styleUrls: ["./word-finder.component.css"]
})
export class WordFinderComponent implements OnInit {
  dictionary: Array<string> = ["chill", "wind", "snow", "cold"];
  src: Array<string> = [ "abcdc", "fgwio", "chill", "pqnsd", "uvdxy" ];
  founds: Array<string> = [];

  constructor(public wordFinderService: WordFinderService,private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  search_Click() {    
    if (this.diferentSize()) {
      this._snackBar.open('Length of word must be equals to quantity of words', "", {
        duration: 3000,
      });
      return;
    }

    this.wordFinderService.isLoading = true;
    this.wordFinderService
      .searchWord({ dictionary: this.dictionary, src: this.src })
      .subscribe(
        response => {
          // Simulate delay transaction.
          timer(2000).subscribe(() => {
            this.founds = response.result;
            this.wordFinderService.isLoading = false;
          });
        },
        error => {
          console.error(error);
          this.wordFinderService.isLoading = false;
        }
      );
  }

  /**
   * The length of every words must be the same.
   */
  diferentSize(): boolean {   
    return this.src.find(c => c.length !== this.src.length) != null;
  }
}
