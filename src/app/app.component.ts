//needed imports to connect/bind
import { Component } from '@angular/core';
import { descriptions } from "./dictionaries/descriptions";
import { things } from "./dictionaries/things";

//Component import connector for html, css ...
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public descriptionIndex: number;
  public descriptions: string[];
  public sprintName: string;
  public thingIndex: number;
  public things: string[];

  constructor() {
    this.descriptionIndex = 0;
    this.descriptions = descriptions;
    this.sprintName = "";
    this.thingIndex = 0;
    this.things = things;

    this.generateName();
  }
  //generateName() makes random descriptions and things list possiablilities 
  public generateName(): void {
    //Randomly select next parts of the name.
    this.descriptionIndex = this.nextIndex(this.descriptionIndex, this.descriptions);
    this.thingIndex = this.nextIndex(this.thingIndex, this.things);
    //Format for output on description and things username ideas for user
    this.sprintName = (
      this.descriptions[this.descriptionIndex] + " " + this.things[this.thingIndex]
    );
    this.shareSprintNameWithUser(this.sprintName);
  }

  private copyToClipboard(value: string): boolean {
    var activeElement = <HTMLElement | null>document.activeElement;

    var textarea: HTMLTextAreaElement = document.createElement("textarea");
    textarea.style.opacity = "0";
    textarea.style.position = "fixed";
    textarea.value = value;
    // Set and select the value (creating an active Selection range).
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      return (true);
    } catch (error) {
      return (false);
    } finally {
      // Return focus to the active element, if we had one.
      if (activeElement) {
        activeElement.focus();
      }
      document.body.removeChild(textarea);
    }
  }

  // I return a random index for selection within the given collection.
  private nextIndex(currentIndex: number, collection: any[]): number {

    var nextIndex = currentIndex;
    var length = collection.length;

    // Keep generating a random index until we get a non-matching value. This just
    // ensures some "change" from generation to generation.
    while (nextIndex === currentIndex) {
      nextIndex = (Math.floor(Math.random() * length));
    }
    return (nextIndex);
  }
  // I share the given Sprint Name with the user.
  private shareSprintNameWithUser(sprintName: string): void {

    // As a convenience, try to copy the new name to the user's clipboard.
    var nameWasCopied = this.copyToClipboard(sprintName);

    // Also, let's log the name to the user's console.
    console.group(
      "%c Generate Username ",
      "background-color: #121212 ; color: #ffffff ;"
    );
    console.log(
      `%c${sprintName}`,
      "color: #ff3366 ;"
    );
    if (nameWasCopied) {
      console.log(
        "%c Username generated automatically copied.",
        "font-style: italic ;"
      );
    }
    console.groupEnd();
  }
}
