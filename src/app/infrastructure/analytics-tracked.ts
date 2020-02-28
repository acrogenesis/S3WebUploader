import { AnalyticsService } from './services/analytics.service'

export function AnalyticsTracked(screen: string): ClassDecorator {
  return function(constructor: any) {
    // You can add/remove events for your needs
    const LIFECYCLE_HOOKS = ['ngOnInit']
    LIFECYCLE_HOOKS.forEach(hook => {
      const original = constructor.prototype[hook]

      constructor.prototype[hook] = function(...args) {
        original && original.apply(this, args)
        if (this.analytics instanceof AnalyticsService) {
          ;(this.analytics as AnalyticsService).screenView(screen)
        }
      }
    })
  }
}
