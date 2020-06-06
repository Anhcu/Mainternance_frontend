import { Component, OnInit, ViewChild } from '@angular/core';
import { Material, MaterialEdit } from '../../models/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MaterialsService } from '../../services/materials.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  @ViewChild('closebuttonAdd') closebuttonAdd;
  @ViewChild('closebuttonEdit') closebuttonEdit;
  @ViewChild('closebuttonDelete') closebuttonDelete;
  @ViewChild('uploadImage') uploadImage;
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, private materialsService: MaterialsService) { }

  materials: Material[];
  addForm: FormGroup;
  editForm: FormGroup;
  viewForm: FormGroup;
  editedMaterial: MaterialEdit;
  image: string;
  playerName: string;
  idDelete: number;
  material: Material;

  ngOnInit(): void {
    this.materialsService.getMaterials()
      .subscribe(data => {
        this.materials = data;
      });

    this.addForm = this.formBuilder.group({
      image: ['2.jpg'],
      name: [''],
      model: [''],
      type: [''],
      store: [''],
      description: [''],
    });

    this.editForm = this.formBuilder.group({
      id: [''],
      image: [''],
      name: [''],
      model: [''],
      type: [''],
      store: [''],
      description: [''],
    });

    this.viewForm = this.formBuilder.group({
      id: [''],
      image: [''],
      name: [''],
      model: [''],
      type: [''],
      store: [''],
      description: [''],
      createdDate: [''],
      updatedDate: ['']
    });
  }

  onSubmit() {
    // this.addForm.value.image = this.image;
    // this.addForm.setValue().image = '1.jpg';
    this.materialsService.createMaterial(this.addForm.value)
      .subscribe(data => {
        this.ngOnInit();
        this.showToaster('Add new material successfully');
        this.addForm.reset();
        this.uploadImage.nativeElement.click();
        this.closebuttonAdd.nativeElement.click();
      });
  }

  viewMaterial(material: Material) {
    this.image = material.image;
    this.viewForm.setValue(material);
  }

  editMaterial(material: Material) {
    this.image = material.image;
    // tslint:disable-next-line:max-line-length
    this.editedMaterial = {id: material.id, image: material.image, name: material.name, model: material.model, type: material.type, store: material.store, description: material.description};
    console.log(this.editedMaterial);
    this.editForm.setValue(this.editedMaterial);
  }

  onEdit() {
    console.log(this.editForm.value);
    this.materialsService.updateMaterial(this.editForm.value)
      .subscribe(data => {
        this.ngOnInit();
        this.showToaster('Update material successfully');
        this.closebuttonEdit.nativeElement.click();
      });
  }

  deleteMaterial(material: Material) {
    console.log(material);
    // tslint:disable-next-line:radix
    this.idDelete = parseInt(material.id);
  }

  onDelete() {
    this.materialsService.deleteMaterial(this.idDelete)
      .subscribe(data => {
        this.ngOnInit();
        this.showToaster('Delete material successfully');
        this.closebuttonDelete.nativeElement.click();
      });
  }

  showToaster(message: string) {
    this.toastr.success(message);
  }

}
