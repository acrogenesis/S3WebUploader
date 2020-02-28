import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FolderBrowserComponent } from './folder-browser/folder-browser.component'
import { InfrastructureModule } from '../infrastructure/infrastructure.module'
import { AwsS3Module } from '../aws-s3/aws-s3.module'
import { TreeViewModule } from '../tree-view/tree-view.module'
import { FileInfoComponent } from './file-info/file-info.component'

@NgModule({
  imports: [CommonModule, InfrastructureModule, AwsS3Module, TreeViewModule],
  declarations: [FolderBrowserComponent, FileInfoComponent],
  exports: [FolderBrowserComponent],
})
export class FolderBrowserModule {}
