import { Dialog, DialogContent } from '@/components/ui/dialog';

const DialogComponent = ({
  content,
  button,
}: {
  content: React.ReactNode;
  button: React.ReactNode;
}) => (
  <Dialog>
    {button}
    <DialogContent className="overflow-auto sm:max-h-[90%] sm:min-h-[500px] sm:max-w-6xl">
      {content}
    </DialogContent>
  </Dialog>
);

export default DialogComponent;
