import { Component } from '@angular/core';
import { descriptions } from "./dictionaries/descriptions";
import { things } from "./dictionaries/things";

//Component import connector for html, css ...
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Export under AppComponent, all things needed for public and private proterties
//Also, used for example, AppComponent.things: string[], things is a list and a function under things.ts
//Using the imports above, that helps with connecting to continue constructing properties
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

  //Webpage output components is public
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

  //Console components is private
  private copyToClipboard(value: string): boolean {
    var activeElement = <HTMLElement | null>document.activeElement;
    var textarea: HTMLTextAreaElement = document.createElement("textarea");
    textarea.style.opacity = "0";
    textarea.style.position = "fixed";
    textarea.value = value;
    //When selecting a value, it then sets the value (creating an active Selection range).
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

  //
  private nextIndex(currentIndex: number, collection: any[]): number {
    var nextIndex = currentIndex;
    var length = collection.length;
    //Continuing to generate random index until it doesnt match value
    while (nextIndex === currentIndex) {
      nextIndex = (Math.floor(Math.random() * length));
    }
    return (nextIndex);
  }
  // I share the given Sprint Name with the user.
  private shareSprintNameWithUser(sprintName: string): void {
    //For console display output, sprintName = spring[] for descriptions and things list .ts
    var nameWasCopied = this.copyToClipboard(sprintName);
    //In Inspect/Console, Generated Username will output text under message to confirm name shown in output display.
    console.group(
      "%c Generated Username ",
      "background-color: #121212 ; color: #ffffff ;"
    );
    console.log(
      `%c${sprintName}`,
      "color: #ff3366 ;"
    );
    //Confirm that username was copied with console.log
    if (nameWasCopied) {
      console.log(
        "%c Username automatically copied.",
        "font-style: italic ;"
      );
    }
    console.groupEnd();
  }
}
