import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Area } from 'src/app/models/area';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AreasService } from '../../services/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  @ViewChild('closebuttonAdd') closebuttonAdd;
  @ViewChild('closebuttonEdit') closebuttonEdit;
  @ViewChild('closebuttonDelete') closebuttonDelete;
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, private areaService: AreasService) { }
  // tslint:disable-next-line:member-ordering

  areas: Area[];
  addForm: FormGroup;
  editForm: FormGroup;
  area: Area;
  idDelete: number;

  ngOnInit(): void {

    this.areaService.getAreas()
      .subscribe(data => {
        this.areas = data;
      });

    this.addForm = this.formBuilder.group({
      name: [''],
      address: [''],
      phonenumber: ['']
    });

    this.editForm = this.formBuilder.group({
      id: [''],
      name: [''],
      address: [''],
      phonenumber: ['']
    });

  }

  onSubmit() {
    // tslint:disable-next-line:max-line-length
    // this.area = { id: this.areas.length + 1 + '', name: this.addForm.value.name, address: this.addForm.value.address, phonenumber: this.addForm.value.phonenumber};
    // this.areas.push(this.area);
    console.log(this.addForm.value);
    this.areaService.createArea(this.addForm.value)
      .subscribe(data => {
        this.ngOnInit();
        this.showToaster('Add new area successfully');
        this.addForm.reset();
        this.closebuttonAdd.nativeElement.click();
      });
  }


  editArea(area: Area) {
    this.editForm.setValue(area);
  }


  onEdit() {
    console.log(this.editForm.value);
    this.areaService.updateArea(this.editForm.value)
      .subscribe(data => {
        this.ngOnInit();
        this.showToaster('Update area successfully');
        this.closebuttonEdit.nativeElement.click();
      });
  }

  deleteArea(area: Area) {

    // tslint:disable-next-line:radix
    this.idDelete = parseInt(area.id);
  }

  onDelete() {
    this.areaService.deleteArea(this.idDelete)
      .subscribe(data => {
        this.ngOnInit();
        this.showToaster('Delete area successfully');
        this.closebuttonDelete.nativeElement.click();
      });
  }
  showToaster(message: string) {
    this.toastr.success(message);
  }
}
