import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdministrationService } from '../administration.service';
import { Profile } from '../model/profile.model';

@Component({
  selector: 'xp-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnChanges {
  @Output() profileUpdated = new EventEmitter<null>();
  @Input() profile: Profile;

  currentFile: File;

  constructor(private service: AdministrationService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.profileForm.patchValue(this.profile);
  }

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    profilePicture: new FormControl('', [Validators.required]),
    biography: new FormControl('', [Validators.required]),
    motto: new FormControl('', [Validators.required])
  })

  onFileSelected(event: any) {
    this.currentFile = event.target.files[0];
  }


  async updateProfile(): Promise<void> {
    const profile: Profile = {
      firstName: this.profileForm.value.firstName || "",
      lastName: this.profileForm.value.lastName || "",
      profilePicture: 'https://localhost:44333/Images/' + this.currentFile.name || "",
      biography: this.profileForm.value.biography || "",
      motto: this.profileForm.value.motto || "",
      isActive: true
    }
    profile.id = this.profile.id;
    profile.userId = this.profile.userId;

    await this.service.upload(this.currentFile).subscribe({
      next: (value) => {

      },
      error: (value) => {

      }, complete: () => {
      },
    });

    this.service.updateProfile(profile).subscribe({
      next: (_) => {
        this.profileUpdated.emit()
      }
    })
  }
}