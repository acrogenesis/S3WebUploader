import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, OnInit } from '@angular/core'
import { TooltipDirective } from 'src/app/infrastructure/tooltip-directive/tooltip.directive'

describe('TooltipDirective', () => {
  it('should create an instance', () => {
    const directive = new TooltipDirective(null, null, null)
    expect(directive).toBeTruthy()
  })
})

describe('TooltipComponent', () => {
  let component: HostComponent
  let fixture: ComponentFixture<HostComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

@Component({
  selector: 'app-host',
  template: `
    <a appTooltip></a>
  `,
})
class HostComponent implements OnInit {
  ngOnInit(): void {}
}
