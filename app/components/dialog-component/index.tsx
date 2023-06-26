import { Dialog, DialogContent } from '@/components/ui/dialog';

const DialogComponent = ({
  content,
  button,
  small,
}: {
  content: React.ReactNode;
  button: React.ReactNode;
  small?: boolean;
}) => (
  <Dialog>
    {button}
    <DialogContent
      small={small}
      className={
        small
          ? 'overflow-auto sm:max-h-[70%] sm:min-h-[200px] sm:max-w-[300px]'
          : 'overflow-auto sm:max-h-[90%] sm:min-h-[500px] sm:max-w-6xl'
      }
    >
      {content}
    </DialogContent>
  </Dialog>
);

export default DialogComponent;
